import { num, onResize } from '$lib/script/core';

const SPEED = 40;       // px per second default (data-marquee-speed overrides)
const MAX_FILL = 100;   // safety cap on the repeat-to-fill loop

// Build one marquee: repeat the track's items to fill the container, then
// duplicate the whole filled run so the track is two identical halves. The CSS
// animation (translateX(-50%)) loops it; JS only sizes it and flags it ready.
const build = (marquee: HTMLElement) => {
    const track = marquee.querySelector<HTMLElement>('[data-marquee-track]');
    if (!track) return;

    const speed = num(marquee.dataset.marqueeSpeed ?? '', SPEED);

    // Clear previously-generated clones (not the authored items Svelte owns).
    track.querySelectorAll('[data-marquee-clone]').forEach((el) => el.remove());

    // Authored items = whatever Svelte currently rendered.
    const items = [...track.children].map((el) => el.cloneNode(true) as HTMLElement);
    if (!items.length) return;

    let guard = 0;
    while (track.scrollWidth < marquee.clientWidth && guard < MAX_FILL) {
        items.forEach((el) => {
            const clone = el.cloneNode(true) as HTMLElement;
            clone.setAttribute('aria-hidden', 'true');
            clone.setAttribute('data-marquee-clone', '');
            track.appendChild(clone);
        });
        guard++;
    }

    const runWidth = track.scrollWidth;

    [...track.children].forEach((el) => {
        // don't re-clone our own clones from this pass? — see note below
        const clone = el.cloneNode(true) as HTMLElement;
        clone.setAttribute('aria-hidden', 'true');
        clone.setAttribute('data-marquee-clone', '');
        track.appendChild(clone);
    });

    marquee.style.setProperty('--marquee-duration', `${(runWidth / speed).toFixed(3)}s`);
    marquee.classList.add('-ready');
};

export const marqueeInit = (): (() => void) => {
    const marquees = [...document.querySelectorAll<HTMLElement>('[data-marquee]')];
    if (!marquees.length) return () => {};

    const buildAll = () => marquees.forEach(build);

    buildAll();

    const cleanups: (() => void)[] = [];

    // Re-fill on resize (shared debounced resize from core) so a widened
    // container never goes blank.
    cleanups.push(onResize(buildAll));

    // Text width changes once webfonts load → rebuild so the fill stays right.
    // Guarded so a late resolve after teardown doesn't touch detached nodes.
    let alive = true;
    if (document.fonts) {
        document.fonts.ready.then(() => { if (alive) buildAll(); });
    }
    cleanups.push(() => { alive = false; });

    return () => cleanups.forEach((fn) => fn());
};