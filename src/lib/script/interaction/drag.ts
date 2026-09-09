import { flags, onTick, pointer } from '$lib/script/core';
import type { DragItem } from '$lib/script/types';

export const dragInit = (): (() => void) => {
    if (!flags.enabled) return () => {};

    const DRAG_SPEED = 1;       // 1 tracks the cursor 1:1, bump it for a faster pull
    const DRAG_THRESHOLD = 5;   // px moved before a press counts as a drag, not a click

    const state: DragItem[] = [...document.querySelectorAll<HTMLElement>('[data-draggable]')]
        .map((container) => ({
            container,
            pressed: false,
            dragged: false,
            startX: 0,
            startScroll: 0,
        }));

    if (!state.length) return () => {};

    const cleanups: (() => void)[] = [];

    // Release anywhere — the press starts on the container but can end off it.
    const release = () => {
        state.forEach((s) => {
            if (!s.pressed) return;
            s.pressed = false;
            s.container.classList.remove('-dragging');
        });
    };

    window.addEventListener('pointerup', release);
    window.addEventListener('pointercancel', release);
    cleanups.push(() => {
        window.removeEventListener('pointerup', release);
        window.removeEventListener('pointercancel', release);
    });

    state.forEach((s) => {
        const onDown = (e: PointerEvent) => {
            s.pressed = true;
            s.dragged = false;
            s.startX = e.clientX;                 // same space as the global pointer
            s.startScroll = s.container.scrollLeft;
            s.container.classList.add('-dragging'); // CSS drops scroll-snap while dragging
        };

        // Swallow the click that fires after a drag so child links/buttons don't trigger.
        const onClick = (e: MouseEvent) => {
            if (!s.dragged) return;
            e.preventDefault();
            e.stopPropagation();
            s.dragged = false;
        };

        // Kill the browser's native image/link drag ghost.
        const onDragStart = (e: DragEvent) => e.preventDefault();

        s.container.addEventListener('pointerdown', onDown);
        s.container.addEventListener('click', onClick, true); // capture phase, beat the child
        s.container.addEventListener('dragstart', onDragStart);

        cleanups.push(() => {
            s.container.removeEventListener('pointerdown', onDown);
            s.container.removeEventListener('click', onClick, true);
            s.container.removeEventListener('dragstart', onDragStart);
            s.container.classList.remove('-dragging');
        });
    });

    cleanups.push(onTick(() => {
        state.forEach((s) => {
            if (!s.pressed) return;

            const walk = (pointer.x - s.startX) * DRAG_SPEED;
            if (Math.abs(walk) > DRAG_THRESHOLD) s.dragged = true;

            s.container.scrollLeft = s.startScroll - walk;
        });
    }));

    return () => cleanups.forEach((fn) => fn());
};