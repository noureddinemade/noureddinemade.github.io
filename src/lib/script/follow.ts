//
import { flags, onTick, onScroll, pointer, num } from '$lib/script/core';
import type { FollowItem } from '$lib/script/types';

//
export const followInit = (): (() => void) => {
    if (!flags.enabled) return () => {};

    const LERP = 0.2, REACH = 100, PARENT_NUDGE = 20;

    const state: FollowItem[] = [...document.querySelectorAll<HTMLElement>('[data-follow], [data-follow-hover]')]
        .map((parent) => ({ parent, child: parent.querySelector<HTMLElement>('.-follow') }))
        .filter((p): p is { parent: HTMLElement; child: HTMLElement } => p.child !== null)
        .map(({ parent, child }) => ({
            parent,
            child,
            axisX: parent.hasAttribute('data-follow-axis-y') ? 0 : 1,
            axisY: parent.hasAttribute('data-follow-axis-x') ? 0 : 1,
            hover: parent.hasAttribute('data-follow-hover'),
            hovered: false,
            px: 0, py: 0, ex: 0, ey: 0, cx: 0, cy: 0, tx: 0, ty: 0,
            tilt: parent.hasAttribute('data-follow-tilt') ? num(parent.dataset.followTilt ?? '', 10) : 0,
            rx: 0, ry: 0, hw: 1, hh: 1,
            lerp: num(parent.dataset.followLerp ?? '', LERP),
            nudge: num(parent.dataset.followNudge ?? '', PARENT_NUDGE),
            reach: num(parent.dataset.followReach ?? '', REACH),
        }));

    if (!state.length) return () => {};


    const cleanups: (() => void)[] = [];

    const measure = () => {
        state.forEach((s) => {
            const r = s.parent.getBoundingClientRect();
            s.cx = r.left + r.width / 2 - s.ex;
            s.cy = r.top + r.height / 2 - s.ey;
            s.tx = (s.parent.offsetWidth - s.child.offsetWidth) / 2;
            s.ty = (s.parent.offsetHeight - s.child.offsetHeight) / 2;
            s.hw = s.parent.offsetWidth / 2 || 1;
            s.hh = s.parent.offsetHeight / 2 || 1;
        });
    };

    state.forEach((s) => {
        if (!s.hover) return;
        const enter = () => { s.hovered = true; };
        const leave = () => { s.hovered = false; };
        s.parent.addEventListener('pointerenter', enter);
        s.parent.addEventListener('pointerleave', leave);
        cleanups.push(() => {
            s.parent.removeEventListener('pointerenter', enter);
            s.parent.removeEventListener('pointerleave', leave);
        });
    });

    requestAnimationFrame(measure);
    cleanups.push(onScroll(measure));
    window.addEventListener('resize', measure);
    cleanups.push(() => window.removeEventListener('resize', measure));

    cleanups.push(onTick(() => {
        state.forEach((s) => {
            let childTX = 0, childTY = 0, parentTX = 0, parentTY = 0, tiltRX = 0, tiltRY = 0;

            if (!s.hover || s.hovered) {
                const dx = pointer.x - s.cx;
                const dy = pointer.y - s.cy;
                const dist = Math.hypot(dx, dy) || 1;
                const reach = Math.min(dist / s.reach, 1);
                const ux = dx / dist, uy = dy / dist;

                childTX = ux * s.tx * reach * s.axisX;
                childTY = uy * s.ty * reach * s.axisY;
                parentTX = ux * s.nudge * reach * s.axisX;
                parentTY = uy * s.nudge * reach * s.axisY;
                tiltRX = Math.max(-1, Math.min(1, dy / s.hh)) * s.tilt * s.axisY;
                tiltRY = -Math.max(-1, Math.min(1, dx / s.hw)) * s.tilt * s.axisX;
            }

            s.px += (childTX - s.px) * s.lerp;
            s.py += (childTY - s.py) * s.lerp;
            s.ex += (parentTX - s.ex) * s.lerp;
            s.ey += (parentTY - s.ey) * s.lerp;
            s.rx += (tiltRX - s.rx) * s.lerp;
            s.ry += (tiltRY - s.ry) * s.lerp;

            s.child.style.setProperty('--child-x', `${s.px.toFixed(2)}px`);
            s.child.style.setProperty('--child-y', `${s.py.toFixed(2)}px`);
            s.parent.style.setProperty('--parent-x', `${s.ex.toFixed(2)}px`);
            s.parent.style.setProperty('--parent-y', `${s.ey.toFixed(2)}px`);
            s.parent.style.setProperty('--parent-rx', `${s.rx.toFixed(2)}deg`);
            s.parent.style.setProperty('--parent-ry', `${s.ry.toFixed(2)}deg`);
        });
    }));

    return () => cleanups.forEach((fn) => fn());
};