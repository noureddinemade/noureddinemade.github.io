import { flags, onTick, pointer, num } from '$lib/script/core';

// module-level handles so cleanup can remove them
let cursorEl: HTMLDivElement | null = null;
let pointerOver: ((e: PointerEvent) => void) | null = null;
let pointerLeave: ((e: PointerEvent) => void) | null = null;
let onBlur: (() => void) | null = null;
let untickCursor: (() => void) | null = null;
let untickAttach: (() => void) | null = null;

export const cursorInit = () => {
    if (!flags.enabled) return;

    // ---- shared cursor element (the cursor concern) ----
    const LERP = 0.4, ROT_LERP = 0.1, DEAD_ZONE = 12;

    cursorEl = document.createElement('div');
    cursorEl.className = 'cursor';
    cursorEl.setAttribute('aria-hidden', 'true');
    document.body.appendChild(cursorEl);
    document.documentElement.classList.add('has-custom-cursor');

    let currentX = pointer.x, currentY = pointer.y;
    let visible = false;
    let withinWindow = true;
    let aimActive = true, aimTarget: HTMLElement | null = null;
    let targetAngle = 0, currentAngle = 0;

    // ---- attach concern state ----
    const A_LERP = 0.2, OFFSET_X = 8, OFFSET_Y = 8;

    let currentTrigger: HTMLElement | null = null;
    let currentItem: HTMLElement | null = null;
    let floaters: HTMLElement[] = [];
    let videos: (HTMLVideoElement | null)[] = [];
    let fx: number[] = [], fy: number[] = [];
    let aLerp = A_LERP, offsetX = OFFSET_X, offsetY = OFFSET_Y;

    const videoOf = (el: HTMLElement, deep: boolean): HTMLVideoElement | null =>
        el.matches('video') ? (el as HTMLVideoElement) : (deep ? el.querySelector('video') : null);

    const applyConfig = (data: DOMStringMap) => {
        aLerp = num(data.lerp ?? '', A_LERP);
        offsetX = num(data.offsetX ?? '', OFFSET_X);
        offsetY = num(data.offsetY ?? '', OFFSET_Y);
    };

    const renderAttach = () => {
        floaters.forEach((el, i) => {
            const x = i === 0 ? fx[i] : fx[i] - fx[0];
            const y = i === 0 ? fy[i] : fy[i] - fy[0];
            el.style.setProperty('--pos-x', `${x.toFixed(2)}px`);
            el.style.setProperty('--pos-y', `${y.toFixed(2)}px`);
        });
    };

    const setCurrent = (next: HTMLElement | null, data: DOMStringMap) => {
        if (next === currentItem) { if (next) applyConfig(data); return; }
        if (currentItem) {
            currentItem.classList.remove('is-current');
            videos.forEach((v) => v?.pause());
        }
        currentItem = next;
        if (!currentItem) { floaters = []; videos = []; return; }

        applyConfig(data);
        const trail = data.trail !== undefined;
        const children = trail
            ? ([...currentItem.children] as HTMLElement[]).filter((c) => !c.matches('source, track'))
            : [];
        floaters = [currentItem, ...children];
        fx = floaters.map(() => pointer.x + offsetX);
        fy = floaters.map(() => pointer.y + offsetY);
        videos = floaters.map((el, i) => videoOf(el, !(children.length && i === 0)));
        renderAttach();
        currentItem.classList.add('is-current');
        videos.forEach((v) => v?.play().catch(() => {}));
    };

    // ---- one shared pointerover for both concerns ----
    pointerOver = (event: PointerEvent) => {
        withinWindow = true;
        const t = event.target as HTMLElement;

        // cursor state + aim
        const tagged = t.closest<HTMLElement>('[data-cursor]');
        if (tagged) cursorEl!.dataset.state = tagged.dataset.cursor;
        else if (t.closest('a[aria-disabled="true"]')) cursorEl!.dataset.state = 'disabled';
        else if (t.closest('a[href]') || t.closest('button')) cursorEl!.dataset.state = 'link';
        else delete cursorEl!.dataset.state;

        const aimEl = t.closest<HTMLElement>('a[href], [data-cursor-aim]');
        const aimOff = !!aimEl && aimEl.dataset.cursorAim === 'off';
        const state = cursorEl!.dataset.state;
        aimActive = !aimOff && (!!aimEl || !state);
        aimTarget = aimActive && aimEl ? aimEl : null;

        // attach trigger resolution
        const trigger = t.closest<HTMLElement>('[data-cursor-attach]');
        if (trigger === currentTrigger) return;
        currentTrigger = trigger;
        const selector = trigger?.dataset.cursorAttach;
        const next = selector ? document.querySelector<HTMLElement>(selector) : null;
        setCurrent(next, trigger ? trigger.dataset : ({} as DOMStringMap));
    };

    const hide = () => {
        withinWindow = false;
        visible = false;
        cursorEl!.classList.remove('is-visible');
        currentTrigger = null;
        setCurrent(null, {} as DOMStringMap);
    };

    // pointer left the window entirely (relatedTarget is null on window exit)
    pointerLeave = (e: PointerEvent) => {
        if (e.relatedTarget) return;
        hide();
    };

    // window lost focus (tab-away, app-switch) — no pointer event fires for these
    onBlur = hide;

    document.addEventListener('pointerover', pointerOver);
    document.addEventListener('pointerout', pointerLeave);
    window.addEventListener('blur', onBlur);

    // visibility follows core's pointer, but we still need a first-move reveal
    // handled inside the cursor tick below via `visible`.

    // ---- cursor tick ----
    untickCursor = onTick(() => {
        if (withinWindow && !visible && (pointer.x || pointer.y)) {
            visible = true;
            cursorEl!.classList.add('is-visible');
        }
        currentX += (pointer.x - currentX) * LERP;
        currentY += (pointer.y - currentY) * LERP;

        if (aimActive) {
            let aimX = window.innerWidth / 2, aimY = 0;
            if (aimTarget) {
                const r = aimTarget.getBoundingClientRect();
                aimX = r.left + r.width / 2;
                aimY = r.top + r.height / 2;
            }
            const dx = aimX - currentX, dy = aimY - currentY;
            if (Math.hypot(dx, dy) > DEAD_ZONE) targetAngle = Math.atan2(dy, dx) * 180 / Math.PI;
        } else targetAngle = 0;

        let delta = targetAngle - currentAngle;
        delta = ((delta + 180) % 360 + 360) % 360 - 180;
        currentAngle += delta * ROT_LERP;

        cursorEl!.style.setProperty('--cur-x', `${currentX.toFixed(2)}px`);
        cursorEl!.style.setProperty('--cur-y', `${currentY.toFixed(2)}px`);
        cursorEl!.style.setProperty('--cur-rot', `${currentAngle.toFixed(2)}deg`);
    });

    // ---- attach tick ----
    untickAttach = onTick(() => {
        if (!currentItem) return;
        fx[0] += ((pointer.x + offsetX) - fx[0]) * aLerp;
        fy[0] += ((pointer.y + offsetY) - fy[0]) * aLerp;
        for (let i = 1; i < floaters.length; i++) {
            fx[i] += (fx[i - 1] - fx[i]) * aLerp;
            fy[i] += (fy[i - 1] - fy[i]) * aLerp;
        }
        renderAttach();
    });
};

export const cursorCleanup = () => {
    untickCursor?.(); untickAttach?.();
    if (pointerOver) document.removeEventListener('pointerover', pointerOver);
    if (pointerLeave) document.removeEventListener('pointerout', pointerLeave);
    if (onBlur) window.removeEventListener('blur', onBlur);
    cursorEl?.remove();
    document.documentElement.classList.remove('has-custom-cursor');
    cursorEl = null; pointerOver = pointerLeave = null;
    untickCursor = untickAttach = null;
};