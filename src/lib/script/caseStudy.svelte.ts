//
import { onMount } from 'svelte';
import { page } from '$app/state';
import { getMetaByPath, getRoleTagsByID } from '$lib/script/helpers';
import { zoomInit, toggleInit, switchInit, vidControlInit, tabsInit } from '$lib/script/interaction';
import { caseStudyFormatter } from '$lib/script/utils';

// Setup each case study page
export const caseStudySetup = () => {
    const caseStudy = $derived(getMetaByPath(page.url.pathname));
    const tags = $derived(caseStudy ? getRoleTagsByID(caseStudy.id) : []);

    onMount(() => {
        const cleanups = [
            toggleInit(),
            tabsInit(),
            switchInit(),
            zoomInit(),
            vidControlInit(),
        ];
        caseStudyFormatter();

        return () => cleanups.forEach((fn) => fn?.());
    });

    return {
        get caseStudy() { return caseStudy; },
        get tags() { return tags; },
    };
};