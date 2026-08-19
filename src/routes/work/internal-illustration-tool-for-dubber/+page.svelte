<script lang="ts">

    import { caseStudySetup } from "$lib/script/caseStudy.svelte";

    // Components
    import Block from "$lib/component/layout/Block.svelte";
    import PageHeader from "$lib/component/layout/PageHeader.svelte";
    import Button from "$lib/component/action/Button.svelte";
    import Image from "$lib/component/asset/Image.svelte";
    import Video from "$lib/component/asset/Video.svelte";
    import Link from "$lib/component/action/Link.svelte";

    const cs = caseStudySetup();
    const array = [1,2,3,4,5];
    
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

<Block props={{ "class":"general" }}>
    <p class="text -xl">
        One of the things that don&rsquo;t get discussed enough in design, tech or really any industry is: how do we keep the wheels turning when everything is going to shit. I&rsquo;m not talking about those manufactured stories where tech triumphs against all the odds. What I&rsquo;m talking about is how people who do their jobs daily continue to provide consistent, quality work when those in charge of running companies keep getting in the way.
    </p>
    <div class="columns -two spacing -gap-lg">
        <p class="text -lg -justify">
            We were losing people fast, resources were being cut and the overall leadership (almost exclusively the CEO) really sucked. Somehow, we were still expected to maintain the quantity and quality of the output. <span class="mark -highlight colour -bg -bg-accent-e-base text -contrast">In the first round of layoffs, I lost my entire design team and three product people.</span> These were were people who were incredible at their jobs and added an immense amount of quality, knowledge and depth to the company. 
        </p>
        <p class="text -lg -justify">
            Those losses meant that the product marketing function at Dubber essentially no longer existed. It&rsquo;s not like it wasn&rsquo;t important, it was absolutely critical to how we interacted with partners and resellers. The expertise required to do it just vanished overnight. And with it, so did our ability to produce the illustrations that were a big part of our product and brand.
        </p>
    </div>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">What are we meant to do?</h2>
    <p class="text -xl">
        I couldn&rsquo;t fix every aspect of the product marketing function, but when it came to illustrations, I had a solution that would help us maintain a small aspect of that quality <span class="mark -em">&mdash;</span> an internal tool that would give the wider product team a way of putting together new illustrations from existing components when needed. The only catch was: <span class="mark -highlight colour -bg -bg-accent-b-dark text -contrast">it needed to be built and released internally, very quickly, and without disrupting the enormous amount of existing work.</span>
    </p>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">Breaking it apart</h2>
    <p class="text -xl -justify">
        Taking our existing illustration library and breaking it down into individual components was the first step. Components that could then be shuffled and repurposed into new-ish illustrations. Each illustration was made up of three critical parts: a background shape, a foreground object and a mask (using the same shape as the background) that gave each illustration its personality and depth.
    </p>
    <p class="text -xl -justify">
        For the shapes we had five in total {#each array as i}<Image src={`work/dub/internal-tool/shape-${i}.svg`} alt="shape" props={{ "class":"inline-icon -md" }} />{/each}
        each representing an aspect of the product: Recording, Cloud, Conversations, Trends and Insights. We weren&rsquo;t strict about usage though, they were brand shapes and we used them where it made sense. The masks were broken into quadrants: top left, top right, bottom left, bottom right which varied from shape to shape {#each array as i}<Image src={`work/dub/internal-tool/mask-${i}.svg`} alt="mask" props={{ "class":"inline-icon -md" }} />{/each} Twenty-five components so far.
    </p>
    <div class="item spacing -m-t-lg -m-b-xl" data-toggle>

        <Button 
            props={{ 
                "class":"-display-switch -off layout -a-s-start spacing -m-b-xs colour -misc-accent-a-light", "data-toggle-trigger":"true", "data-cursor":"link", "data-cursor-aim":"true",
                "label":{ "data-text":"How it works" } 
            }}
        />

        <div class="item" data-toggle-element>
            <Image src="work/dub/internal-tool/illustration-breakdown.png" alt="An example illustration broken up into the 3 core components."  props={{ "class":"border -rounded -r-md -s-base" }}/>
        </div>
        <div class="item -off" data-toggle-element>
            <Video 
                vid="work/dub/internal-tool/illustration-breakdown.mp4"
                props={{ 
                    "aria-label":"The plugin in action. The user selects a component and runs the plugin, which generates the spec sheet.",
                    "class":"border -rounded -r-md -s-base",
                    "autoplay":true, "muted":true, "loop":true
                }}
            />  
        </div>

    </div>
    <p class="text -xxl">
        The foreground objects were the core of it. Mostly realistic, some abstract, all 3D rendered, all in black and white so the background colour could do its thing. After breaking these down we had 430 foreground object components in total. Around 80 unique objects, each with at least two variations.
    </p>
    <div class="img-zoom border -r-sm -s-base colour -bg -bg-light-light spacing -mw-xxl -m-t-lg" data-zoom="5">
        <Image src="work/dub/internal-tool/objects.png" alt="The majority of the 3D objects shown in a grid"/>
    </div>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">Building</h2>
    <p class="text -xl">
        Building was actually the easiest part. My philosophy with internal tools is simple: <span class="mark -highlight colour -bg -bg-accent-e-base">if it&rsquo;s not dealing with sensitive data or interact with live production code, it doesn&rsquo;t need to be precious.</span> It was a quick build in React that utilised SVGs for shapes and masks so that it could handle lossless adjustments.
    </p>
    <p class="text -lg">
        What the user ends up being able to do is select a background, pick a colour from our brand palette, select one of the 430 objects available and then play around with the size, rotation and mask. Then when they&rsquo;re happy with it, they export the high quality PNG. The only process that doesn&rsquo;t live in the tool is that after an illustration is made, it gets added to the library manually and documented in a spreadsheet.
    </p>
    <Link props={{ "href":"https://noureddine.biz/dub-illustration-maker", "label":{"data-text":"Use the tool", "class":"text -serif -xl"}, "class":"-external layout -a-s-start", "data-window":"true" }}/>
    <Video 
        vid="work/dub/internal-tool/tool.mp4"
        props={{ 
            "aria-label":"The tool in action. A user selects the shape, colour and object. Then they play around with scale, rotation and position. Finally they export the image.",
            "class":"border -rounded -r-md -s-base spacing -m-t-lg -m-b-lg",
            "autoplay":true, "muted":true, "loop":true
        }}
    />
    <p class="text -xl">
        Despite this tool not being built perfectly, I still made sure it could handle additions or updates in the future. Adding new shapes and colours were basic code additions, just a few extra lines here and there. Adding new foreground objects was just a matter of dropping the image into the directory and it would automatically populate in the tool.
    </p>
    <div class="columns -three spacing -gap-md -m-t-md -m-b-xl">
        <div class="item">
            <Image src="work/dub/internal-tool/add-shape.png" alt="The template code to add a new shape."  props={{ "class":"border -rounded -r-md -s-base" }}/>
        </div>
        <div class="item">
            <Image src="work/dub/internal-tool/add-colour.png" alt="The template code to add a new theme."  props={{ "class":"border -rounded -r-md -s-base" }}/>
        </div>
        <div class="item">
            <Image src="work/dub/internal-tool/add-object.png" alt="A screenshot showing the drag and drop."  props={{ "class":"border -rounded -r-md -s-base" }}/>
        </div>
    </div>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">Same shit, different day.</h2>
    <div class="columns -two spacing -gap-xxl">
        <p class="text -xxl">
            While this didn&rsquo;t fix all of our problems, it helped us keep things afloat while we hoped things would return to normal and that the functions we lost would be restored. <span class="mark -highlight colour -bg -bg-accent-d-light text -contrast" data-cursor="🤡">Spoiler, that did not happen.</span>
        </p>
        <div class="item"></div>
    </div>
</Block>