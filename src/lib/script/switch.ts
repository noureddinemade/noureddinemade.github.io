const clickSwitch = (name: string | undefined, trigger: HTMLElement, target: HTMLElement) => {

    trigger.classList.toggle('-off');
    target.querySelectorAll(`[data-name="${name}"]`).forEach(t => { t.classList.toggle('-off') });

}

export const switchInit = (): (() => void) => {

    const switchControls = document.querySelectorAll<HTMLElement>('[data-switch-control]');
    const switchTargets = document.querySelectorAll<HTMLElement>('[data-switch-target]');
    const cleanups: (() => void)[] = [];

    if (!switchControls.length || !switchTargets.length) return () => null;

    switchControls.forEach((switchSet) => {

        const switches = switchSet.querySelectorAll<HTMLElement>('[data-name]');
        const target = [...switchTargets].find(i => i.dataset.switchTarget === switchSet.dataset.switchControl);

        if (!target) return;

        switches.forEach(s => {
            s.addEventListener('click', e => { clickSwitch(s.dataset.name, s, target) })
            cleanups.push(() => s.removeEventListener('click', e => { clickSwitch(s.dataset.name, s, target) }));
        })

    })

    return () => cleanups.forEach((fn) => fn());
}