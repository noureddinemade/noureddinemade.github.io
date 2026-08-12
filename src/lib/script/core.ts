import Lenis from 'lenis';

const mq = (query: string) => window.matchMedia(query).matches;

export const flags = {
    reduce: false,
    rich: false,
    enabled: false,
};

export let lenis: Lenis | null = null;

const subscribers = new Set<(time: number) => void>();

export const pointer = { x: 0, y: 0 };

const trackPointer = (e: PointerEvent) => {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
};

export const onTick = (fn: (time: number) => void): (() => void) => {
    subscribers.add(fn);
    return () => subscribers.delete(fn);
};

const frame = (time: number) => {
    lenis?.raf(time);
    for (const fn of subscribers) fn(time);
    requestAnimationFrame(frame);
};

export const coreInit = () => {
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
            stopInertiaOnNavigate: true
        });

        requestAnimationFrame(frame);
    }
};

export const resetScroll = () => {
    lenis?.scrollTo(0, { immediate: true });
    lenis?.resize();
};

export const viewportProgress = (el: HTMLElement): number => {
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const raw = (vh - rect.top) / (vh + rect.height);
    return Math.min(1, Math.max(0, raw));
};

export const onScroll = (fn: (e: Lenis) => void) => {
    lenis?.on('scroll', fn);
};

export const getScroll = () => lenis?.scroll ?? 0;
export const getVelocity = () => lenis?.velocity ?? 0;

export const num = (v: string, d: number): number => {
    const n = parseFloat(v);
    return Number.isFinite(n) ? n : d;
};