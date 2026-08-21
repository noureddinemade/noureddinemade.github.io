const pauseMedia = (element: HTMLElement): void => {
    element.querySelectorAll('video').forEach((media) => media.pause());
};

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
                if (off) pauseMedia(t);
            });
            trigger.classList.toggle('-off');
        };

        trigger.addEventListener('click', onClick);
        cleanups.push(() => trigger.removeEventListener('click', onClick));
    });

    return () => cleanups.forEach((fn) => fn());
};

type Tab = { trigger: HTMLButtonElement; panel: HTMLElement };

export const tabsInit = (): (() => void) => {
    const containers = document.querySelectorAll<HTMLElement>('[data-tabs]');
    const cleanups: (() => void)[] = [];

    containers.forEach((container, containerIndex) => {
        const triggers = Array.from(
            container.querySelectorAll<HTMLButtonElement>('[data-tab-trigger]')
        );
        const panels = Array.from(
            container.querySelectorAll<HTMLElement>('[data-tab-target]')
        );

        if (!triggers.length || !panels.length) return;

        // Pair each trigger to the panel that shares its value.
        const tabs: Tab[] = triggers.reduce<Tab[]>((acc, trigger) => {
            const key = trigger.dataset.tabTrigger;
            const panel = key ? panels.find((p) => p.dataset.tabTarget === key) : undefined;
            if (panel) acc.push({ trigger, panel });
            return acc;
        }, []);

        if (!tabs.length) return;

        // Tabs must be siblings; their shared parent becomes the tablist.
        const tablist = tabs[0].trigger.parentElement;
        if (!tablist) return;

        tablist.setAttribute('role', 'tablist');
        const name = container.dataset.tabs;
        if (name) tablist.setAttribute('aria-label', name);

        tabs.forEach(({ trigger, panel }, i) => {
            const base = `tabs-${containerIndex}-${i}`;
            if (!trigger.id) trigger.id = `${base}-tab`;
            if (!panel.id) panel.id = `${base}-panel`;
            if (trigger.type !== 'button') trigger.type = 'button';

            trigger.setAttribute('role', 'tab');
            trigger.setAttribute('aria-controls', panel.id);
            panel.setAttribute('role', 'tabpanel');
            panel.setAttribute('aria-labelledby', trigger.id);

            // Let keyboard users focus panels that hold no focusable content.
            if (!panel.hasAttribute('tabindex')) panel.tabIndex = 0;
        });

        // Active tab is the first with a visible panel, else the first tab.
        const initial = tabs.find(({ panel }) => !panel.classList.contains('-off')) ?? tabs[0];

        // Single source of truth for selection state.
        const selectTab = (next: Tab, moveFocus = false) => {
            tabs.forEach((tab) => {
                const active = tab === next;
                tab.trigger.setAttribute('aria-selected', String(active));
                tab.trigger.tabIndex = active ? 0 : -1; // roving tabindex
                tab.trigger.classList.toggle('-off', !active);
                tab.panel.classList.toggle('-off', !active);
                if (!active) pauseMedia(tab.panel);
            });
            if (moveFocus) next.trigger.focus();
        };

        selectTab(initial);

        const onKeydown = (e: KeyboardEvent) => {
            const current = tabs.findIndex((t) => t.trigger === document.activeElement);
            if (current === -1) return;

            let next = current;
            switch (e.key) {
                case 'ArrowRight': next = (current + 1) % tabs.length; break;
                case 'ArrowLeft':  next = (current - 1 + tabs.length) % tabs.length; break;
                case 'Home':       next = 0; break;
                case 'End':        next = tabs.length - 1; break;
                default: return;
            }
            e.preventDefault();
            selectTab(tabs[next], true); // automatic activation + move focus
        };

        tablist.addEventListener('keydown', onKeydown);
        cleanups.push(() => tablist.removeEventListener('keydown', onKeydown));

        tabs.forEach((tab) => {
            const onClick = () => selectTab(tab, true);
            tab.trigger.addEventListener('click', onClick);
            cleanups.push(() => tab.trigger.removeEventListener('click', onClick));
        });
    });

    return () => cleanups.forEach((fn) => fn());
};