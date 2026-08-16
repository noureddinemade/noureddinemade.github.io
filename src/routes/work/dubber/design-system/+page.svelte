<script lang="ts">

    // Modules
    import { onMount } from "svelte";
    import { page } from '$app/state';
    import { toggleInit } from "$lib/script/toggle";
    import { switchInit } from "$lib/script/switch";
    import { getMetaByPath, getRoleTagsByID } from "$lib/script/helpers";
    import { caseStudyFormatter } from "$lib/script/utils";

    // Components
    import Block from "$lib/component/layout/Block.svelte";
    import PageHeader from "$lib/component/layout/PageHeader.svelte";
    import Button from "$lib/component/action/Button.svelte";
    import Image from "$lib/component/asset/Image.svelte";
    import Video from "$lib/component/asset/Video.svelte";

    // Case study specific assets
    import Token1 from "$lib/asset/work/dub/design-system/token-1-figma-raw.svg";
    import Token2 from "$lib/asset/work/dub/design-system/token-2-figma-reference.svg";
    import Token3 from "$lib/asset/work/dub/design-system/token-3-figma-contrast.svg";
    import Token4 from "$lib/asset/work/dub/design-system/token-4-css-raw.svg";
    import Token5 from "$lib/asset/work/dub/design-system/token-5-css-reference.svg";
    import Token6 from "$lib/asset/work/dub/design-system/token-6-css-contrast.svg";
    import Token7 from "$lib/asset/work/dub/design-system/token-7-css-usage.svg";
    
    // Get Case Study details
    const caseStudy = $derived(getMetaByPath(page.url.pathname));
    const tags = $derived.by(() => caseStudy ? getRoleTagsByID(caseStudy.id) : [] );

    // Mount
    onMount(() => {
        toggleInit();
        switchInit();
        caseStudyFormatter();
    })

</script>

<PageHeader props={{ "tags":tags, "content":{"class":"spacing -mw-lg"}}}>

    <h1 class="text -headline -sans -uppercase">
        {caseStudy?.title}
    </h1>
    <p class="text -xxl">
        {caseStudy?.desc}
    </p>

</PageHeader>

<Block props={{ "class":"general" }}>
    <h2 class="text -xxl -sans -bold -uppercase">The Full Story</h2>
    <p class="text -xl">
    Joining Dubber as the head of product design meant that I had become responsible for a design system that consisted of a few basic styles and components, housed in an undocumented Figma file. Around <span class="text -sans -bold">85%</span> of what was being built by the engineering team <span class="mark -highlight colour -bg -bg-accent-f-base">was custom code</span>, built in isolation while working on specific features for the product.
    </p>
    <div class="columns -two spacing -gap-lg">
        <p class="text -lg -justify">
            As someone who enjoys getting deep into systems and processes, I would&rsquo;ve loved to just drop everything and work on a design system. But that wasn&rsquo;t my reality, my design team was small and our workload was that of a team 3 times bigger. That meant the problem wasn&rsquo;t to create a design system that helped us move faster, it was how do we do this while simultaneously working on core business projects.
        </p>
        <p class=" text -lg -justify">
            Given their scope and focus, a few of these projects would allow us to grow the design system organically. Rather than focusing immediately on the &ldquo;things&rdquo; in the design system, it was important to prioritise the building blocks; the structure and the processes around it (contribution, documentation and accessibility).
        </p>
    </div>
    <div class="columns -two spacing -gap-lg -m-t-lg -m-b-lg">
        <div class="img-zoom border -r-sm -s-base spacing colour -bg -bg-light-dark" data-cursor="🔍" data-zoom="5" data-cursor-attach="#expand">
            <Image src="work/dub/design-system/old-file-1.png" alt="A screenshot of Figma showing basic styles and components." />
        </div>
        <div class="img-zoom border -r-sm -s-base spacing colour -bg -bg-light-dark" data-cursor="🔍" data-zoom="5" data-cursor-attach="#expand">
            <Image src="work/dub/design-system/old-file-2.png" alt="A screenshot of Figma showing basic styles and components." />
        </div>
    </div>
    <p class="text -xxl spacing -mw-xl">
        <span class="mark -highlight colour -bg -bg-accent-b-dark text -contrast">Fundamentals are what make a design system valuable. The most in depth component libraries in the world don&rsquo;t mean anything if your teams don&rsquo;t know how to use them.</span>
    </p>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xxl -sans -bold -uppercase">Four Layer dip</h2>
    <p class="text -xl">
        The structure of the design system was tailored to the product. Not how the product is in its current form, but the <span class="mark -underline -d colour -fill -fill-accent-b-base" data-cursor="❓" data-cursor-attach="#problem">problem</span> that the product was solving. This was a key distinction because the point of the system was that it would scale and grow with the business. It consisted of 4 layers: components, groups, features and views. Views allow the user to get all the context they need and perform whatever tasks needed to complete their objective. Each view is made up of features, groups and components. Each feature allows a user to perform a single task. To do this, the groups within that feature give the user the context they need to perform that task.
    </p>
    <p class="text -lg">
        Here&rsquo;s an example: a team manager at a call centre wants to put together a training deck for onboarding new agents using examples of complaints handling. They will use the complaints dashboard (view) to filter the data (using the action-bar feature which is made up of input components and a button group) so that they can see data charts (groups) relevant to their team and complaints queries.
    </p>
    <p class="text -lg">
        I ran workshops to make sure our teams were aligned on the structure, each with different people and objectives. The first session, which involved the Global Product Director, CTO and key product/tech people, was about buy in for the structure&rsquo;s concept and reasoning. The last session was about explaining the concept and it ended with a game where the designers split off with their engineering counterparts and deconstructed what was currently built in the product into the new structure. This helped make sure that everyone not only understood its importance, but also understood how to apply it.
    </p>

    <div class="item spacing -m-t-lg">
        <div class="group -group-center spacing -gap-xs -mw-lg -p-t-xs -p-r-xs -p-b-xs -p-l-xs sticky -top-xl -z-high border -r-md -s-base colour -bg -bg-light-base layout -f-a-center" data-switch-control="layers">
            <p class="text -md -sans -uppercase -bold spacing -p-r-xs">Layers:</p>
            <Button 
                props={{ 
                    "class":"-display-switch colour -misc-accent-d-base -off", "data-name":"component", "data-cursor":"link", "data-cursor-aim":"true", "label":{ "data-text":"Component" } 
                }}
            />

            <Button 
                props={{ 
                    "class":"-display-switch colour -misc-accent-c-base -off", "data-name":"group", "data-cursor":"link", "data-cursor-aim":"true", "label":{ "data-text":"Group" } 
                }}
            />
            <Button 
                props={{ 
                    "class":"-display-switch colour -misc-accent-b-base -off", "data-name":"feature", "data-cursor":"link", "data-cursor-aim":"true", "label":{ "data-text":"Feature" } 
                }}
            /><Button 
                props={{ 
                    "class":"-display-switch colour -misc-accent-a-base -off", "data-name":"view", "data-cursor":"link", "data-cursor-aim":"true", "label":{ "data-text":"View" } 
                }}
            />
        </div>
    <Image src="work/dub/design-system/layers.svg" alt="" props={{ "class":"svg-layers colour -bg -bg-light-dark border -rounded -r-md -s-base", "data-switch-target":"layers" }}/>
    </div>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xxl -sans -bold -uppercase">Processing...</h2>
    <p class="text -xl">
        With the core structure in a good place, my next challenge was the processes of the design system. Much like the structure, these needed to be tailored to not just the problem but also our team. I focused on the processes around contribution first, because these would be critical in how we build the components in the design system.
    </p>
    <div class="columns -two spacing -gap-xl">
        <Image alt="" src="work/dub/design-system/contribution.svg" props={{ "class":"svg-contribution" }}/>
        <div class="item spacing -gap-md">
            <p class="text -lg -justify">
                The contribution process was framed around the idea that anyone in design or engineering could contribute to the design system. If you wanted to contribute, you would add it to the agenda of our weekly design review. In that design review you <span class="text -sans -md -uppercase -bold">explain</span> your reasoning behind this contribution, the team would then critique and <span class="text -sans -md -uppercase -bold">analyse</span> it. If this contribution made sense and was worth adding to the design system, you then get to <span class="text -sans -md -uppercase -bold">implement</span> it and <span class="text -sans -md -uppercase -bold">own</span> it.
            </p>
            <p class="text -lg">
                Using this process ensured that everyone had true ownership over the design system. It also meant that <span class="mark -highlight colour -bg -bg-accent-e-base text -contrast">if you couldn&rsquo;t answer why, when, where and how to use a component, then it wasn&rsquo;t ready to add to the system.</span> Because this process was always going to happen while we were working on other business projects, it helped ensure that the team was building with purpose and only building the components we needed.
            </p>
        </div>
    </div>
</Block>

<!-- Cursor Attachments -->
<span class="cursor-attach -tooltip" id="problem">
    Without listening to every single recorded call, how can we help businesses extract value that helps them understand their business more deeply. Then, how do we present it back to them in a way that makes sense and allows them to make impactful data driven decisions based on context.
</span>
<span class="cursor-attach -tag" id="expand">Click to expand</span>
<span class="cursor-attach -tag" id="l-c">Component</span>
<span class="cursor-attach -tag" id="l-g">Group</span>
<span class="cursor-attach -tag" id="l-f">Feature</span>
<span class="cursor-attach -tag" id="l-v">View</span>