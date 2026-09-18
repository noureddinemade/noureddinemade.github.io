//
import { onMount } from 'svelte';
import { page } from '$app/state';
import { getMetaByPath } from '$lib/script/helpers';
import { zoomInit, toggleInit, switchInit, vidControlInit, tabsInit, dragInit } from '$lib/script/interaction';
import { caseStudyFormatter } from '$lib/script/utils';

// Setup each case study page
export const caseStudySetup = () => {
    const caseStudy = $derived(getMetaByPath(page.url.pathname));

    onMount(() => {
        const cleanups = [
            toggleInit(),
            tabsInit(),
            switchInit(),
            zoomInit(),
            vidControlInit(),
            dragInit(),
        ];
        caseStudyFormatter();

        return () => cleanups.forEach((fn) => fn?.());
    });

    return {
        get caseStudy() { return caseStudy; }
    };

};