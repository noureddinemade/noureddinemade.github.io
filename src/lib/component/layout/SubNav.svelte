<script lang="ts">

    import { getNextCase, getPrevCase } from '$lib/script/helpers';
    import Link from '$lib/component/action/Link.svelte';

    let { current }: { current: number; } = $props();

    const next = $derived(getNextCase(current));
    const prev = $derived(getPrevCase(current));

</script>

<Link props={{
    "href": prev ? prev.href : null,
    "class": '-prev colour -bg -bg-accent-a-light -hover -hover-accent-a-base text -contrast',
    "aria-disabled": prev ? "false" : "true",
    "label": { 'data-text': 'Previous' }
}} />
<Link props={{
    "href": next ? next.href : null,
    "class": '-next colour -bg -bg-accent-a-light -hover -hover-accent-a-base text -contrast',
    "aria-disabled": next ? "false" : "true",
    "label": { 'data-text': 'Next' }
}} />