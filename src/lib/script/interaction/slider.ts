import { flags } from '$lib/script/core';

// Per-element: builds and tears down one slider. Use via the `slider` action
// (below) so each <Slider> component owns its own instance — never scans the
// document, so any number of sliders coexist without rebuilding each other.
export const sliderInit = (slider: HTMLElement): (() => void) => {
    const slides = [...slider.children] as HTMLElement[];
    if (!slides.length) return () => {};

    // Move the slides into a generated .slides track (the scroller) so the
    // controls can sit in the non-scrolling frame around it.
    const track = document.createElement('div');
    track.className = 'slides';
    slides.forEach((slide) => track.append(slide));

    const prev = document.createElement('button');
    prev.type = 'button';
    prev.className = 'btn -slider-control -prev';
    prev.setAttribute('aria-label', 'Previous slide');
    prev.setAttribute('data-cursor', '👈🏽');
    prev.setAttribute('data-cursor-attach', '#prev');

    const next = document.createElement('button');
    next.type = 'button';
    next.className = 'btn -slider-control -next';
    next.setAttribute('aria-label', 'Next slide');
    next.setAttribute('data-cursor', '👉🏽');
    next.setAttribute('data-cursor-attach', '#next');

    const dotsWrap = document.createElement('div');
    dotsWrap.className = 'dots';

    const dots = slides.map((_, i) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'btn -slider-control -dot';
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.setAttribute('data-cursor-aim', 'true');
        dotsWrap.append(dot);
        return dot;
    });

    slider.append(track, prev, next, dotsWrap);

    let current = 0;

    const setActive = (index: number) => {
        current = index;
        dots.forEach((dot, i) => {
            const on = i === index;
            dot.classList.toggle('-current', on);
            dot.setAttribute('aria-current', on ? 'true' : 'false');
        });
        prev.disabled = index === 0;
        next.disabled = index === slides.length - 1;
    };

    const goTo = (i: number) => {
        if (i < 0 || i >= slides.length) return;

        const slide = slides[i];
        const behavior: ScrollBehavior = flags.reduce ? 'auto' : 'smooth';

        // Centre the slide inside the track — contained, so no ancestor scrolls.
        const trackRect = track.getBoundingClientRect();
        const slideRect = slide.getBoundingClientRect();
        const delta = (slideRect.left - trackRect.left) - (track.clientWidth - slide.clientWidth) / 2;

        track.scrollTo({ left: track.scrollLeft + delta, behavior });
    };

    const onPrev = () => goTo(current - 1);
    const onNext = () => goTo(current + 1);
    prev.addEventListener('click', onPrev);
    next.addEventListener('click', onNext);

    const dotHandlers = dots.map((dot, i) => {
        const onDot = () => goTo(i);
        dot.addEventListener('click', onDot);
        return { dot, onDot };
    });

    // Sync active state to the most visible slide — covers dots, arrows and swipe.
    const ratios = new Map<Element, number>();
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => ratios.set(e.target, e.intersectionRatio));

        let best = 0, bestRatio = -1;
        slides.forEach((slide, i) => {
            const r = ratios.get(slide) ?? 0;
            if (r > bestRatio) { bestRatio = r; best = i; }
        });

        setActive(best);
    }, { root: track, threshold: [0.25, 0.5, 0.75, 1] });

    slides.forEach((slide) => observer.observe(slide));
    setActive(0);

    return () => {
        observer.disconnect();
        prev.removeEventListener('click', onPrev);
        next.removeEventListener('click', onNext);
        dotHandlers.forEach(({ dot, onDot }) => dot.removeEventListener('click', onDot));

        // Restore original markup: slides back on the frame, generated chrome gone.
        slides.forEach((slide) => slider.append(slide));
        track.remove();
    };
};

// Svelte action: `<div use:slider>` builds on mount, tears down on unmount.
export const slider = (node: HTMLElement) => ({ destroy: sliderInit(node) });