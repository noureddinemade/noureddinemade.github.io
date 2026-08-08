<script>
    import { page } from '$app/state';
    import { theme, spacing, typography, animation } from '$lib/style/variables.js';
    import { getMetaByPath } from '$lib/script/helpers';
    import { toCssVars } from '$lib/style/css-vars.js';
    import '$lib/style/main.css';

    let { children } = $props();

    const root = `:root{${
        toCssVars(theme) +
        toCssVars(spacing) +
        toCssVars(typography) +
        toCssVars(animation)
    }}`;

    const current = $derived(getMetaByPath(page.url.pathname));

</script>

<svelte:head>
    <title>{current?.title}</title>
    <meta name="description" content={current?.desc} />
    {@html `<style>${root}</style>`}
</svelte:head>

<main class={`main${current ? ` -${current.id}` : ''}`}>
	{@render children()}
</main>
