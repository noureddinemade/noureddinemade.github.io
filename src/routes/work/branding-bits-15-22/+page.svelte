<script lang="ts">

    import { caseStudySetup } from "$lib/script/caseStudy.svelte";

    // Components
    import Block from "$lib/component/layout/Block.svelte";
    import PageHeader from "$lib/component/layout/PageHeader.svelte";
    import Button from "$lib/component/action/Button.svelte";
    import Image from "$lib/component/asset/Image.svelte";

    const cs = caseStudySetup();
    const themes = [
        { bg: 'light-light', fill: 'dark-dark' },
        { bg: 'dark-dark', fill: 'light-light' },
        { bg: 'dark-dark', fill: 'accent-a-light' },
        { bg: 'light-light', fill: 'accent-b-base' },
        { bg: 'light-light', fill: 'accent-c-base' },
        { bg: 'dark-dark', fill: 'accent-d-base' },
        { bg: 'dark-dark', fill: 'accent-e-base' },
        { bg: 'dark-dark', fill: 'accent-f-base' },
    ]

    let theme = $state('-bg-light-light -fill-dark-dark');
    
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

<Block props={{ "class":"general", "content":{"class":"spacing -mw-xxl"} }}>

    <div class="columns -six spacing -gap-xl">

        <div class="item sticky -top-md spacing -gap-lg">
            <p class="text -serif -xxl -justify">
                It&rsquo;s always such a delight when I get the oppurtunity to work on branding or visual identiy. This collection of logos includes some of my favourite designs between 2015 and 2022. Not all of them ended up as the final design, some of them were just full on rejected but all of these particular pieces of work that I felt proud of.
            </p>
            <div class="group spacing -gap-sm">
                {#each themes as t}
                    <Button 
                        props={{ 
                            "class":`-theme-item colour -bg -bg-${t.fill} ${theme === `-bg-${t.bg} -fill-${t.fill}` ? '-selected' : ''}`, "data-name":"component", "data-cursor":"link", "data-cursor-aim":"true", "label":{ "data-text":"" },
                            "onclick": () => theme = `-bg-${t.bg} -fill-${t.fill}`
                        }}
                    />
                {/each}
            </div>
        </div>

        <div class="columns -four spacing -gap-md">
            {#each Array.from({ length: 24 }) as _, i}
                <Image src={`work/nm/branding-bits-15-22/branding-0${i+1}.svg`} alt="" 
                    props={{ "class":`border -r-md -s-base colour -bg -fill ${theme}` }}
                />
            {/each}
        </div>

    </div>


</Block>