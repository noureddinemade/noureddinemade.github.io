import { onScroll, getScroll } from '$lib/script/core';

export const footerInit = () => {
    const footer = document.querySelector<HTMLElement>('footer');
    const main = document.querySelector<HTMLElement>('main');

    if (!footer || !main) return null;

    let runway = 1;
    let maxScroll = 0;

    const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

    const measure = () => {
        runway = parseFloat(getComputedStyle(main).marginBottom) || 1;
        maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    };

    const update = () => {
        const distance = maxScroll - getScroll();
        const p = clamp(1 - distance / runway, 0, 1);
        footer.style.setProperty('--footer-reveal', p.toFixed(3));
    };

    const onResize = () => { measure(); update(); };

    measure();
    update();

    const unScroll = onScroll(update);
    window.addEventListener('resize', onResize);

    return {
        remeasure: () => { measure(); update(); },
        destroy: () => {
            unScroll();
            window.removeEventListener('resize', onResize);
        },
    };
};