import { animation } from '$lib/style/variables';

export type NavPhase = 'exit' | 'enter';

const subscribers = new Set<(phase: NavPhase, to: string | null) => void>();

export const transitionSpeed = Number(String(animation.pgTransition.speed).replace('ms', ''));

export const onNavPhase = (fn: (phase: NavPhase, to: string | null) => void): (() => void) => {
    subscribers.add(fn);
    return () => { subscribers.delete(fn); };
};

export const setNavPhase = (phase: NavPhase, to: string | null = null) => {
    for (const fn of subscribers) fn(phase, to);
};

// Toggle -on off then back on when the element "changes".
//   • function arg → navigation mode: resolver(path) defines change; driven by nav phases.
//   • other arg    → change mode: cycles whenever the value changes.
type Resolver = (path: string) => unknown;

export const transitionOn = (arg: Resolver | unknown) => (node: HTMLElement) => {

    // navigation mode
    if (typeof arg === 'function') {
        const resolver = arg as Resolver;
        let current = resolver(location.pathname);
        let changing = false;

        return onNavPhase((phase, to) => {
            if (phase === 'exit') {
                changing = resolver(to ?? location.pathname) !== current;
                if (changing) node.classList.remove('-on');
            } else {
                current = resolver(location.pathname);
                if (changing) {
                    changing = false;
                    node.classList.add('-on');
                }
            }
        });
    }

    // change mode — re-runs on each value change because the attachment is reactive
    node.classList.remove('-on');
    const timer = setTimeout(() => node.classList.add('-on'), transitionSpeed);
    return () => clearTimeout(timer);
};