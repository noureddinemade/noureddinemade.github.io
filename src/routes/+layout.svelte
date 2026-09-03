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
    import { theme, spacing, typography, animation } from '$lib/style/variables';

    import Header from '$lib/component/layout/Header.svelte';
    import Footer from '$lib/component/layout/Footer.svelte';
    import Light from '$lib/version/Light.svelte';
    
    import '$lib/style/main.css';

    const mq = browser ? window.matchMedia('(min-width: 820px)') : null;

    let { children } = $props();
    let on = $state(true);
    let isWide = $state(mq?.matches ?? false);

    if (browser) coreInit();

    const root = `:root{${
        toCssVars(theme) +
        toCssVars(spacing) +
        toCssVars(typography) +
        toCssVars(animation)
    }}`;

    const current = $derived(getMetaByPath(page.url.pathname));

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
        const update = () => (isWide = mq.matches);
        update();
        mq.addEventListener('change', update);
        return () => mq.removeEventListener('change', update);
    });

</script>


<svelte:head>
    <title>{current && current.title ? current.title : ''}</title>
    <meta name="description" content={current?.desc} />
    {@html `<style>${root}</style>`}
</svelte:head>

<Header current={current ? current : null} />
<main class={`main${current ? ` -${current.id}` : ''}${on ? ' -on' : ''}`}>
    {#if (isWide)}
        {@render children()}
    {:else}
        <Light />
    {/if}
</main>
{#if (current && current.id !== 'home')}<Footer />{/if}