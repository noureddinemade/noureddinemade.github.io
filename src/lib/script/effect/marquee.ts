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

    // Cache the authored items so rebuilds (resize / font load) start clean.
    if (!track.dataset.template) {
        track.dataset.template = track.innerHTML;
    }
    track.innerHTML = track.dataset.template;

    const items = [...track.children].map((el) => el.cloneNode(true));
    if (!items.length) return;

    // Repeat the items until the run fills the container. The cap guards a
    // zero-width container / empty items from looping forever. Fill copies are
    // machine-made repetition, so they're hidden from assistive tech — the
    // authored items (still in the track) read once, like an alt text.
    let guard = 0;
    while (track.scrollWidth < marquee.clientWidth && guard < MAX_FILL) {
        items.forEach((el) => {
            const clone = el.cloneNode(true) as HTMLElement;
            clone.setAttribute('aria-hidden', 'true');
            track.appendChild(clone);
        });
        guard++;
    }

    // Width of one run — measured before duplicating.
    const runWidth = track.scrollWidth;

    // Duplicate the filled run once → two identical halves. Snapshot the
    // current children first so the clones aren't themselves re-cloned.
    [...track.children].forEach((el) => {
        const clone = el.cloneNode(true) as HTMLElement;
        clone.setAttribute('aria-hidden', 'true');
        track.appendChild(clone);
    });

    // Duration covers exactly one run → constant speed regardless of length.
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