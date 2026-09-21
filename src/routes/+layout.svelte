<script lang="ts">

    import { browser } from '$app/environment';
    import { onMount, tick } from 'svelte';
    import { page } from '$app/state';
    import { onNavigate, afterNavigate } from '$app/navigation';

    import { getMetaByPath, toCssVars, generateMeta } from '$lib/script/helpers';
    import { imgLoad } from '$lib/script/utils';
    import { coreInit, resetScroll, flags } from '$lib/script/core';
    import { setNavPhase, transitionSpeed } from '$lib/script/transition';
    import { cursorCleanup, cursorInit } from '$lib/script/cursor';
    import { theme, spacing, typography, animation } from '$lib/style/variables';

    import Header from '$lib/component/layout/Header.svelte';
    import Footer from '$lib/component/layout/Footer.svelte';
    import Lite from '$lib/version/Lite.svelte';
    import CTA from '$lib/component/layout/CTA.svelte';
    
    import '$lib/style/main.css';

    const mq = browser ? window.matchMedia('(min-width: 820px)') : null;
    
    let { children } = $props();
    let on = $state(true);
    let full = $state(mq?.matches ?? true);
    
    if (browser) coreInit();
    
    // Generate CSS variables
    const root = `:root{${
        toCssVars(theme) +
        toCssVars(spacing) +
        toCssVars(typography) +
        toCssVars(animation)
    }}`;
    
    // Get current page
    const current = $derived(getMetaByPath(page.url.pathname));
    // Toggle CTA visibility based on page
    const cta = $derived(current && !['home','journal','about'].includes(current.id) ? true : false);
    // Metadata
    const meta = $derived(generateMeta(current));

    onMount(() => {
        cursorInit();
        return cursorCleanup;
    });

    onNavigate((navigation) => {
        setNavPhase('exit', navigation.to?.url.pathname ?? null);

        if (flags.reduce) return () => setNavPhase('enter');

        on = false;

        return new Promise((resolve) => {
            setTimeout(resolve, transitionSpeed);
        }).then(() => {
            return () => {
                on = true;
                setNavPhase('enter');
            };
        });
    });

    afterNavigate(async () => {
        imgLoad();
        resetScroll();
        await tick();
    });
    
    $effect(() => {
        if (!mq) return;
        const update = () => (full = mq.matches);
        update();
        mq.addEventListener('change', update);
        return () => mq.removeEventListener('change', update);
    });

</script>


<svelte:head>
    <title>{meta.title}</title>
    <meta name="description" content={meta.desc} />
    <meta property="og:title" content={meta.title} />
    <meta property="og:description" content={meta.desc} />
    <meta property="og:image" content={meta.img} />
    <meta property="og:url" content={meta.href} />
    <meta property="og:type" content="website" />
    {#if (!meta.published)}<meta name="robots" content="noindex, follow" />{/if}
    {@html `<style>${root}</style>`}
</svelte:head>

<!-- Hide header if in Lite mode -->
{#if (full)} <Header current={current ? current : null} /> {/if}

<main class={`main${current ? ` -${current.id}` : ''}${on ? ' -on' : ''}`}>
    {#if (full)}
        {@render children()}
        {#if (cta)}<CTA />{/if}
    {:else}
        <Lite />
    {/if}
    
    <!-- Footer only displays if not on the home page or if in Lite mode -->
    {#if (current && current.id !== 'home' || !full)} <Footer /> {/if}
</main>
