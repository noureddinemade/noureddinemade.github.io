<script lang="ts">

    import { caseStudySetup } from "$lib/script/caseStudy.svelte";

    // Components
    import Block from "$lib/component/layout/Block.svelte";
    import PageHeader from "$lib/component/layout/PageHeader.svelte";
    import Button from "$lib/component/action/Button.svelte";
    import Image from "$lib/component/asset/Image.svelte";

    const cs = caseStudySetup();
    
</script>

<PageHeader props={{ "tags":cs.tags, "content":{"class":"spacing -mw-lg"}}}>

    <h1 class="text -headline -sans -uppercase">
        {@html cs.caseStudy?.title}
    </h1>
    {#if (cs.caseStudy && cs.caseStudy.desc)}
        <p class="text -xxl">
            {@html cs.caseStudy.desc}
        </p>
    {/if}

</PageHeader>

<Block props={{ "class":"general colour -bg -bg-light-light", "content":{"class":"spacing -mw-none"} }}>

    <div class="columns -five spacing -gap-xs">
        <Image src="work/nm/branding-bits-15-22/branding-001.svg" alt="<REPLACE>" />
        <Image src="work/nm/branding-bits-15-22/branding-002.svg" alt="<REPLACE>" />
        <Image src="work/nm/branding-bits-15-22/branding-003.svg" alt="<REPLACE>" />
        <Image src="work/nm/branding-bits-15-22/branding-004.svg" alt="<REPLACE>" />
        <Image src="work/nm/branding-bits-15-22/branding-005.svg" alt="<REPLACE>" />
        <Image src="work/nm/branding-bits-15-22/branding-006.svg" alt="<REPLACE>" />
        <Image src="work/nm/branding-bits-15-22/branding-007.svg" alt="<REPLACE>" />
        <Image src="work/nm/branding-bits-15-22/branding-008.svg" alt="<REPLACE>" />
        <Image src="work/nm/branding-bits-15-22/branding-009.svg" alt="<REPLACE>" />
        <Image src="work/nm/branding-bits-15-22/branding-010.svg" alt="<REPLACE>" />

    </div>


</Block>