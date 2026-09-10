<script lang="ts">

    import { caseStudySetup } from "$lib/script/caseStudy.svelte";

    // Components
    import Block from "$lib/component/layout/Block.svelte";
    import PageHeader from "$lib/component/layout/PageHeader.svelte";
    import Button from "$lib/component/action/Button.svelte";
    import Image from "$lib/component/asset/Image.svelte";

    const cs = caseStudySetup();
    let dark = $state(false);
    
</script>

<PageHeader props={{ "tags":cs.tags, "content":{"class":"spacing -mw-lg"}}}>

    <h1 class={"text -headline -sans -uppercase"}>
        {@html cs.caseStudy?.title}
    </h1>
    {#if (cs.caseStudy && cs.caseStudy.desc)}
        <p class="text -xxl">
            {@html cs.caseStudy.desc}
        </p>
    {/if}

</PageHeader>

<Block props={{ "class":"general", "content":{"class":"spacing -mw-xl"} }}>

    <div class="columns -six spacing -gap-md">

        {#each Array.from({ length: 24 }) as _, i}
            <Image src={`work/nm/branding-bits-15-22/branding-0${i+1}.svg`} alt="" props={{ "class": dark ? 'colour -fill -fill-light-dark' : ''}} />
        {/each}
    </div>


</Block>