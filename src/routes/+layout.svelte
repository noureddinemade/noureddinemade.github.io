<script>
    import { theme, spacing, typography, animation } from '$lib/style/variables.js';
    import { toCssVars } from '$lib/style/css-vars.js';
    import '$lib/style/main.css';

    let { children } = $props();

    let root = `:root{${
        toCssVars(theme) +
        toCssVars(spacing) +
        toCssVars(typography) +
        toCssVars(animation)
    }}`;
</script>

<svelte:head>
    {@html `<style>${root}</style>`}
</svelte:head>

<main class="name">
	{@render children()}
</main>
