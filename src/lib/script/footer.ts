import { onScroll, getScroll } from '$lib/script/core';
import { onNavPhase, transitionSpeed } from '$lib/script/transition';

export const footerInit = () => {
    const footer = document.querySelector<HTMLElement>('footer');
    const main = document.querySelector<HTMLElement>('main');

    if (!footer || !main) return null;

    let runway = 1;
    let maxScroll = 0;
    let resetTimer = 0;

    const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

    const measure = () => {
        runway = parseFloat(getComputedStyle(main).marginBottom) || 1;
        maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    };

    const update = () => {
        let distance = maxScroll - getScroll();
        if (distance < runway * 1.5) {
            maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            distance = maxScroll - getScroll();
        }
        const p = clamp(1 - distance / runway, 0, 1);
        footer.style.setProperty('--footer-reveal', p.toFixed(3));
    };

    // hide with a transition, only during a nav reset
    const reset = () => {
        footer.classList.add('-exit');
        footer.style.setProperty('--footer-reveal', '0');
        window.clearTimeout(resetTimer);
        resetTimer = window.setTimeout(
            () => footer.classList.remove('-exit'),
            transitionSpeed + 50,
        );
    };

    const onResize = () => { measure(); update(); };

    measure();
    update();

    const unScroll = onScroll(update);
    window.addEventListener('resize', onResize);

    const offNav = onNavPhase((phase) => { if (phase === 'exit') reset(); });

    const ro = new ResizeObserver(() => { measure(); update(); });
    ro.observe(main);

    return {
        remeasure: () => { measure(); update(); },
        destroy: () => {
            window.clearTimeout(resetTimer);
            unScroll();
            offNav();
            window.removeEventListener('resize', onResize);
            ro.disconnect();
        },
    };
};