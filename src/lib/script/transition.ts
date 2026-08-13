import { animation } from '$lib/style/variables';

export type NavPhase = 'exit' | 'enter';

const subscribers = new Set<(phase: NavPhase) => void>();

// single source of truth for page-transition duration (ms)
export const transitionSpeed = Number(String(animation.pgTransition.speed).replace('ms', ''));

export const onNavPhase = (fn: (phase: NavPhase) => void): (() => void) => {
    subscribers.add(fn);
    return () => { subscribers.delete(fn); };
};

export const setNavPhase = (phase: NavPhase) => {
    for (const fn of subscribers) fn(phase);
};