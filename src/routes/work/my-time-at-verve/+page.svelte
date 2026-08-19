<script lang="ts">

    import { caseStudySetup } from "$lib/script/caseStudy.svelte";

    // Components
    import Block from "$lib/component/layout/Block.svelte";
    import PageHeader from "$lib/component/layout/PageHeader.svelte";
    import Button from "$lib/component/action/Button.svelte";
    import Image from "$lib/component/asset/Image.svelte";
    import Video from "$lib/component/asset/Video.svelte";

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

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">Intro</h2>
    <p class="text -xl">
        Before we get into the work, I have to be completely honest about my time at Verve — which is now Pollen (yes, THAT Pollen).
    </p>
    <p class="text -lg">
        After several months there, I noticed a few incidents of racism. I reported them to both the Head of People and the CEO, both of whom assured me it would be investigated. That was the catalyst for everything that followed — including the company trying to illegally deport me during my visa process.
    </p>
    <p class="text -lg">
        This company was led by a group of disgusting, horrible people, and I'm glad the world can finally see them for the absolute bags of shit they are.
    </p>
    <p class="text -lg">
        Despite all of that, I got to work with a group of wonderful people in the product and tech teams, and we worked on genuinely interesting stuff. So here's what I got up to while I was there.
    </p>
</Block>

<Block props={{ "class":"general", "id":"global-markets" }}>
    <h2 class="text -xl -sans -bold -uppercase">Moving into European markets</h2>
    <p class="text -xl">
        Verve's product was built specifically for the UK. One of my first projects after joining was getting it ready for our European expansion — Germany, France and the Netherlands. That came down to two main areas: the sales flow and localising the entire product.
    </p>
    <p class="text -lg">
        The sales flow needed rethinking for two reasons. The most important was that it had to comply with strict anti-spam laws, specifically in Germany. The second was that it was outdated for our target audience. Localisation was critical for launch — not just translation, but address formats, currencies and payment methods.
    </p>
    <p class="text -lg">
        The project ran over four months. It involved more than 30 user interviews across multiple countries, four major iterations on the flow (plus plenty of minor ones), working with three different translation agencies to find the right fit, a stack of usability tests, and a few legal meetings to make sure we weren't breaking those anti-spam laws.
    </p>
</Block>

<Block props={{ "class":"general", "id":"iconography" }}>
    <h2 class="text -xl -sans -bold -uppercase">Creating new iconography</h2>
    <p class="text -xl">
        The product's original icons were quick designs knocked out for the MVP. After assessing the product in my first week, I wanted an icon set that was actually built for it — more cohesive, with guidelines for any future icons. I pitched it to the Head of Design, got the go-ahead, and designed the set along with the guidelines to go with it.
    </p>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">Making recruit pages more helpful</h2>
    <p class="text -xl">
        Clients recruit ambassadors using a recruit page for a specific festival or campaign. The old pages didn't explain much — a brief, vague overview of everything — and they gave the client very little room to customise for their brand.
    </p>
    <p class="text -lg">
        After a lot of user interviews with potential ambassadors across Europe, North America, Australia and New Zealand, we found the most critical things they wanted to know before signing up: how it all works, what they could earn, and what being an ambassador was actually like.
    </p>
    <p class="text -lg">
        Work on this feature ran for three months. Two of those I spent based in Australia, running 20 user interviews with potential ambassadors. Working remotely 10 hours ahead was a real challenge — I was completely isolated from my team, and it was also bloody hot.
    </p>
</Block>

<Block props={{ "class":"general", "id":"sports-and-travel" }}>
    <h2 class="text -xl -sans -bold -uppercase">Expanding the product</h2>
    <p class="text -xl">
        My last two projects were group events and seated events, both part of the company's expansion into travel and sporting events.
    </p>
    <p class="text -lg">
        We kicked off with two full-day workshops. We spoke with several experts at Ticketek (our ticketing partner at the time) and ran user interviews with current ambassadors, who'd been vocal about how frustrating it was trying to sell to groups for festivals.
    </p>
    <p class="text -lg">
        From there I put together some basic flows showing the core differences between our existing product and how the new features would change it. Then some very crude mock-ups and prototypes, and a few usability testing sessions with existing ambassadors. I got to the final designs, and we were starting to pitch to several US-based companies and sporting franchises.
    </p>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">Wrapping up my time there</h2>
    <p class="text -xl">
        Here's the honest part: I left before I got to see how most of it turned out.
    </p>
    <p class="text -lg">
        The icons were the one piece that shipped and got used while I was there. The recruit pages were still in development. The events work had reached final designs, and we were just starting to pitch to US companies and franchises. The European expansion — I did the work, but I was gone before I could tell you how the launch actually landed.
    </p>
    <p class="text -lg">
        That's a lot of different problems in a short stretch: new markets, a fresh icon system, a recruitment rebuild, and two new product lines. I'm proud of the range of it. I just wish it had happened somewhere that didn't treat people the way they did. Good work, wrong place — and given everything in that intro, leaving wasn't a hard decision.
    </p>
</Block>