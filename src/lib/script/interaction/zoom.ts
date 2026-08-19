import { flags, onTick, pointer, num } from '$lib/script/core';
import type { ZoomItem } from '$lib/script/types';

export const zoomInit = (): (() => void) => {
    if (!flags.enabled) return () => {};

    const state: ZoomItem[] = [...document.querySelectorAll<HTMLElement>('[data-zoom]')]
        .map((wrapper) => ({ wrapper, img: wrapper.querySelector<HTMLImageElement>('img') }))
        .filter((p): p is { wrapper: HTMLElement; img: HTMLImageElement } => p.img !== null)
        .map(({ wrapper, img }) => ({
            wrapper,
            img,
            active: false,
            ww: 1, wh: 1,
            rangeX: 0, rangeY: 0,
        }));

    let expandTag: HTMLSpanElement | null = null;

    if (!state.length) { return () => {} }
    else {

        expandTag = document.createElement('span');
        
        expandTag.classList.add('cursor-attach', '-tag');
        expandTag.id = 'expand';
        expandTag.innerText = 'Click to zoom in';

        document.querySelector('main')?.append(expandTag);

    }

    const cleanups: (() => void)[] = [];

    // Read geometry at activation — the image is loaded and laid out by then.
    // data-zoom optionally carries a scale multiplier; absent, the image goes
    // to its natural size. --zoom-scale is what the CSS grows to.
    const measure = (s: ZoomItem) => {
        const r = s.wrapper.getBoundingClientRect();
        s.ww = r.width || 1;
        s.wh = r.height || 1;
        const natural = (s.img.naturalWidth && s.img.offsetWidth)
            ? s.img.naturalWidth / s.img.offsetWidth
            : 1;
        const scale = num(s.wrapper.dataset.zoom ?? '', natural);
        s.rangeX = Math.max(0, s.img.offsetWidth * scale - s.ww);
        s.rangeY = Math.max(0, s.img.offsetHeight * scale - s.wh);
        s.wrapper.style.setProperty('--zoom-scale', scale.toFixed(4));
    };

    const setActive = (s: ZoomItem, on: boolean) => {
        s.active = on;
        expandTag.innerText = on ? 'Click to zoom out' : 'Click to zoom in';
        s.wrapper.classList.toggle('-zoomed', on);
    };

    state.forEach((s) => {
        const onClick = () => {
            if (!s.active) measure(s);
            setActive(s, !s.active);
        };
        const onLeave = () => { if (s.active) setActive(s, false) };
        s.wrapper.addEventListener('click', onClick);
        s.wrapper.addEventListener('pointerleave', onLeave);
        s.wrapper.dataset.cursor = '🔍';
        s.wrapper.dataset.cursorAttach = '#expand';

        cleanups.push(() => {
            s.wrapper.removeEventListener('click', onClick);
            s.wrapper.removeEventListener('pointerleave', onLeave);
        });
    });

    cleanups.push(onTick(() => {
        state.forEach((s) => {
            let tx = 0, ty = 0;

            if (s.active) {
                // Fresh rect so it tracks scroll. Cursor fraction across the
                // window → pan: cursor left shows the image's left edge.
                const r = s.wrapper.getBoundingClientRect();
                const fx = Math.min(1, Math.max(0, (pointer.x - r.left) / s.ww));
                const fy = Math.min(1, Math.max(0, (pointer.y - r.top) / s.wh));
                tx = -fx * s.rangeX;
                ty = -fy * s.rangeY;
            }

            s.wrapper.style.setProperty('--zoom-x', `${tx.toFixed(2)}px`);
            s.wrapper.style.setProperty('--zoom-y', `${ty.toFixed(2)}px`);
        });
    }));

    return () => {
        cleanups.forEach((fn) => fn());
        expandTag?.remove();
    }
};