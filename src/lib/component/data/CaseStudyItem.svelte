<script lang="ts">

    import type { Case } from "$lib/script/types";

    import Link from "$lib/component/action/Link.svelte";
    import Tags from "$lib/component/data/Tags.svelte";
    import CompanyIcon from "$lib/component/asset/CompanyIcon.svelte";

    let { caseStudy } : { caseStudy: Case } = $props();

    const href      = $derived(caseStudy.href);
    const title     = $derived(caseStudy.title);
    const tags      = $derived(caseStudy.tags);
    const icon      = $derived(caseStudy.icon);
    const accent    = $derived(caseStudy.accent);


</script>

<li class={`case-study-item colour -hover -hover-accent-${accent}`}>
    <Link props={{ "href":href, "label":{ "data-text":title }, "class":"-case-study-item text -hover" }}/>
    <Tags tags={tags} bg="accent-c-base" />
    <span class="icon">{icon}</span>
</li>