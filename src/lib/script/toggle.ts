export const toggleInit = (): (() => void) => {
    const containers = document.querySelectorAll<HTMLElement>('[data-toggle]');
    const cleanups: (() => void)[] = [];

    containers.forEach((container) => {
        const trigger = container.querySelector<HTMLElement>('[data-toggle-trigger]');
        const targets = container.querySelectorAll<HTMLElement>('[data-toggle-element]');

        if (!trigger || !targets.length) return;

        targets.forEach((target) => {
            if (target.parentElement?.classList.contains('toggle-element')) return;
            const div = document.createElement('div');
            div.classList.add('toggle-element');
            target.replaceWith(div);
            div.append(target);
            container.append(div);
            if (target.classList.contains('-off')) div.classList.add('-off');
        });

        const onClick = () => {
            targets.forEach((t) => {
                const off = t.classList.toggle('-off');
                if (off) t.querySelectorAll('video').forEach((media) => media.pause());
            });
            trigger.classList.toggle('-off');
        };

        trigger.addEventListener('click', onClick);
        cleanups.push(() => trigger.removeEventListener('click', onClick));
    });

    return () => cleanups.forEach((fn) => fn());
};