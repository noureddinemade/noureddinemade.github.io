<script lang="ts">

    import type { Page } from "$lib/script/types";
    
    import { onMount } from "svelte";
    import { followInit } from "$lib/script/effect";

    import Link from "$lib/component/action/Link.svelte";
    import Tags from "$lib/component/data/Tags.svelte";

    let { caseStudy } : { caseStudy: Page } = $props();

    const href      = $derived(caseStudy && caseStudy.href    ? caseStudy.href    : '' );
    const title     = $derived(caseStudy && caseStudy.title   ? caseStudy.title   : '' );
    const tags      = $derived(caseStudy && caseStudy.tags    ? caseStudy.tags    : [''] );
    const icon      = $derived(caseStudy && caseStudy.icon    ? caseStudy.icon    : '' );
    const accent    = $derived(caseStudy && caseStudy.accent  ? caseStudy.accent  : '' );

    onMount(followInit);

</script>

<li class={`case-study-item colour -hover -hover-accent-${accent}`} data-follow-hover data-follow-reach=50 data-follow-nudge=10 data-follow-lerp=.3>
    <Link props={{ "href":href, "label":{ "data-text":title }, "class":"-case-study-item text -hover -follow" }}/>
    <Tags tags={tags} bg={`accent-${accent}`} />
    <span class="icon">{icon}</span>
</li>