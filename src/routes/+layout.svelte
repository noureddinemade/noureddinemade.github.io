<script lang="ts">

    import { browser } from '$app/environment';
    import { onMount, tick } from 'svelte';
    import { page } from '$app/state';
    import { onNavigate, afterNavigate } from '$app/navigation';

    import { getMetaByPath, toCssVars } from '$lib/script/helpers';
    import { imgLoad } from '$lib/script/utils';
    import { coreInit, resetScroll, flags } from '$lib/script/core';
    import { setNavPhase, transitionSpeed } from '$lib/script/transition';
    import { cursorCleanup, cursorInit } from '$lib/script/cursor';
    import { footerInit } from '$lib/script/footer';
    import { theme, spacing, typography, animation } from '$lib/style/variables';
    
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

    const current = $derived(getMetaByPath(page.url.pathname));
    const showFooter = $derived(!!current && current.id !== 'home');

    let footer: ReturnType<typeof footerInit> = null;

    onMount(() => {
        cursorInit();
        return cursorCleanup;
    });

    $effect(() => {
        if (!showFooter) return;
        footer = footerInit();
        return () => {
            footer?.destroy();
            footer = null;
        };
    });

    onNavigate(() => {
        setNavPhase('exit');

        if (flags.reduce) return () => setNavPhase('enter');

        phase = '-exit';

        return new Promise((resolve) => {
            setTimeout(resolve, transitionSpeed);
        }).then(() => {
            return () => {
                phase = '-enter';
                setNavPhase('enter');
            };
        });
    });

    afterNavigate(async () => {
        imgLoad();
        resetScroll();
        await tick();
        requestAnimationFrame(() => footer?.remeasure());
    });
</script>


<svelte:head>
    <title>{current && current.title ? current.title : ''}</title>
    <meta name="description" content={current?.desc} />
    {@html `<style>${root}</style>`}
</svelte:head>

<Header current={current ? current : null} />
<main class={`main${current ? ` -${current.id}` : ''} ${phase}`}>
	{@render children()}
</main>
{#if (showFooter)}<Footer />{/if}