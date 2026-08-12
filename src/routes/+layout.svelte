<script lang="ts">
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';
    import { page } from '$app/state';
    import { onNavigate, afterNavigate } from '$app/navigation';
    import { theme, spacing, typography, animation } from '$lib/style/variables';
    import { getMetaByPath, toCssVars } from '$lib/script/helpers';
    import { imgLoad } from '$lib/script/utils';
    import { coreInit, resetScroll } from '$lib/script/core';
    import { cursorCleanup, cursorInit } from '$lib/script/cursor';
    import { footerInit } from '$lib/script/footer';
    import '$lib/style/main.css';

    import Header from '$lib/component/layout/Header.svelte';
    import Footer from '$lib/component/layout/Footer.svelte';

    if (browser) coreInit();
    
    let { children } = $props();
    let phase = $state('');

    const root = `:root{${
        toCssVars(theme) +
        toCssVars(spacing) +
        toCssVars(typography) +
        toCssVars(animation)
    }}`;

    let transition: string | number = animation.pgTransition.speed;
        transition = transition.replace('ms', '');
        transition = Number(transition);

    const current = $derived(getMetaByPath(page.url.pathname));
    const footer = browser ? footerInit() : null;

    onMount(() => {
        
        cursorInit();
        return cursorCleanup;

    });

    onNavigate(() => {

        phase = '-exit';

        return new Promise((resolve) => {
            setTimeout(resolve, transition);
        }).then(() => {
            return () => phase = '-enter';
        })

    });

    afterNavigate(() => {
        imgLoad();
        resetScroll();
        footer?.remeasure();
    })

</script>


<svelte:head>
    <title>{current && current.title ? current.title : ''}</title>
    <meta name="description" content={current?.desc} />
    {@html `<style>${root}</style>`}
</svelte:head>

<Header current={current && current.id ? current.id : ''} />
<main class={`main${current ? ` -${current.id}` : ''} ${phase}`}>
	{@render children()}
</main>
{#if (current && current.id !== "home")}<Footer />{/if}