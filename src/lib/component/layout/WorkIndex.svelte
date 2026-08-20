<script lang="ts">

    import { cases } from "$lib/data/glossary";    
    
    import CaseStudyItem from "$lib/component/data/CaseStudyItem.svelte";
    
    const caseList = cases.filter(c => c.inList);

</script>

<ul class="work-index">
    {#each caseList as item}
        <CaseStudyItem caseStudy={item} />
    {/each}
</ul>