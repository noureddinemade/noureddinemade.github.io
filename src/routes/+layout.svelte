<script>
    import { theme, spacing, typography, animation } from '$lib/style/variables.js';
    import { toCssVars } from '$lib/style/css-vars.js';
    import '$lib/style/main.css';   // global CSS (was Style.astro's @import)

    let { children } = $props();

    // Same string Style.astro built, injected into <head> at prerender time so
    // the vars are present at first paint. The root layout persists across SPA
    // navigation, so this is set once and never re-runs.
    const root = `:root{${
        toCssVars(theme) +
        toCssVars(spacing) +
        toCssVars(typography) +
        toCssVars(animation)
    }}`;
</script>

<svelte:head>
    {@html `<style>${root}</style>`}
</svelte:head>

{@render children()}
