import Lenis from 'lenis';

const mq = (query: string) => window.matchMedia(query).matches;

export const flags = {
    reduce: false,
    rich: false,
    enabled: false,
};

export let lenis: Lenis | null = null;

const tickSubscribers = new Set<(time: number) => void>();
const scrollSubscribers = new Set<() => void>();
const resizeSubscribers = new Set<() => void>();

export const pointer = { x: 0, y: 0 };

// native-scroll fallback state (only used when Lenis isn't running)
let lastNativeY = 0;
let nativeVelocity = 0;
let scrollScheduled = false;

const trackPointer = (e: PointerEvent) => {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
};

const notifyScroll = () => {
    for (const fn of scrollSubscribers) fn();
};

// shared debounced resize — one listener fans out to all subscribers
let resizeTimer = 0;
const RESIZE_DEBOUNCE = 150;

const onNativeResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
        for (const fn of resizeSubscribers) fn();
    }, RESIZE_DEBOUNCE);
};

// rAF-batched native scroll handler (fallback when Lenis is absent)
const onNativeScroll = () => {
    if (scrollScheduled) return;
    scrollScheduled = true;
    requestAnimationFrame(() => {
        scrollScheduled = false;
        const y = window.scrollY;
        nativeVelocity = y - lastNativeY;
        lastNativeY = y;
        notifyScroll();
    });
};

export const onTick = (fn: (time: number) => void): (() => void) => {
    tickSubscribers.add(fn);
    return () => { tickSubscribers.delete(fn); };
};

export const onScroll = (fn: () => void): (() => void) => {
    scrollSubscribers.add(fn);
    return () => { scrollSubscribers.delete(fn); };
};

export const onResize = (fn: () => void): (() => void) => {
    resizeSubscribers.add(fn);
    return () => { resizeSubscribers.delete(fn); };
};

const frame = (time: number) => {
    lenis?.raf(time);
    for (const fn of tickSubscribers) fn(time);
    requestAnimationFrame(frame);
};

let initialised = false;

export const coreInit = () => {
    if (initialised) return;
    initialised = true;

    flags.reduce = mq('(prefers-reduced-motion: reduce)');
    flags.rich = mq('(hover: hover) and (pointer: fine)');
    flags.enabled = flags.rich && !flags.reduce;

    if (flags.enabled) {
        pointer.x = window.innerWidth / 2;
        pointer.y = window.innerHeight / 2;
        window.addEventListener('pointermove', trackPointer, { passive: true });

        lenis = new Lenis({
            lerp: 0.1,
            wheelMultiplier: 1,
            autoRaf: false,
            stopInertiaOnNavigate: true,
        });

        // Lenis feeds the scroll subscribers
        lenis.on('scroll', notifyScroll);

        requestAnimationFrame(frame);
    } else {
        // no Lenis: native scroll still feeds the scroll subscribers
        lastNativeY = window.scrollY;
        window.addEventListener('scroll', onNativeScroll, { passive: true });
    }

    window.addEventListener('resize', onNativeResize, { passive: true });

};

export const resetScroll = () => {
    if (lenis) {
        lenis.scrollTo(0, { immediate: true });
        lenis.resize();
    } else {
        window.scrollTo(0, 0);
        lastNativeY = 0;
        nativeVelocity = 0;
    }
};

export const viewportProgress = (el: HTMLElement): number => {
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const raw = (vh - rect.top) / (vh + rect.height);
    return Math.min(1, Math.max(0, raw));
};

export const getScroll = () => lenis?.scroll ?? window.scrollY;
export const getVelocity = () => lenis?.velocity ?? nativeVelocity;

export const num = (v: string, d: number): number => {
    const n = parseFloat(v);
    return Number.isFinite(n) ? n : d;
};