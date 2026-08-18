import type { Action } from 'svelte/action';

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

// Toggle -on off (exit) then back on (enter) when the element's resolved
// value changes across an in-app navigation. resolve() maps a pathname to a
// comparable value — the element's own definition of "changed". Rest state
// (off) and the transition itself are defined in CSS.
export const transitionOn: Action<HTMLElement, (path: string) => unknown> = (node, resolve) => {
    let resolver = resolve;
    let current = resolver(location.pathname);
    let changing = false;

    const off = onNavPhase((phase, to) => {
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

    return {
        update(next) { resolver = next; },
        destroy() { off(); },
    };
};