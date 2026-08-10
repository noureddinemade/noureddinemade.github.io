<script>
    
    import Link from '$lib/component/action/Link.svelte';
    import { pages } from '$lib/data/glossary.js';

    let { current } = $props();

</script>

<nav class="global">
    {#each pages.filter(page => page.inNav) as page}
        {@const isCurrent = page.id === current}
        <Link props={{
            href: page.href || undefined,
            class: isCurrent ? '-current' : undefined,
            'aria-current': isCurrent ? 'page' : undefined,
            label: { 'data-text': page.title }
        }} />
    {/each}
</nav>