<script lang="ts">
    import { browser } from '$app/environment';
    import { onMount, tick } from 'svelte';
    import { page } from '$app/state';
    import { onNavigate, afterNavigate } from '$app/navigation';
    import { theme, spacing, typography, animation } from '$lib/style/variables';
    import { getMetaByPath, toCssVars } from '$lib/script/helpers';
    import { imgLoad } from '$lib/script/utils';
    import { coreInit, resetScroll } from '$lib/script/core';
    import { onNavPhase, setNavPhase, transitionSpeed } from '$lib/script/transition';
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
        phase = '-exit';
        setNavPhase('exit');

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

<Header current={current && current.id ? current.id : ''} />
<main class={`main${current ? ` -${current.id}` : ''} ${phase}`}>
	{@render children()}
</main>
{#if (showFooter)}<Footer />{/if}