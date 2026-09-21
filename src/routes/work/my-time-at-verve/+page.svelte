<script lang="ts">

    import { caseStudySetup } from "$lib/script/caseStudy.svelte";

    // Components
    import Block from "$lib/component/layout/Block.svelte";
    import PageHeader from "$lib/component/layout/PageHeader.svelte";
    import Image from "$lib/component/asset/Image.svelte";
    import Link from "$lib/component/action/Link.svelte";
    import Slider from "$lib/component/asset/Slider.svelte";

    const cs = caseStudySetup();
    
</script>

<PageHeader props={{ "caseStudy": cs.caseStudy, "content":{"class":"spacing -mw-lg"}}}>

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
        Before we get into the work, I have to be completely honest about my time at Verve, which later became Pollen (yes, THAT Pollen).
    </p>
    <p class="text -lg">
        After several months there, I noticed a few incidents of racism. I reported them to both the Head of People and the CEO, both of whom assured me it would be investigated. That was the catalyst for everything that followed, including the company trying to illegally deport me during my visa process.
    </p>
    <p class="text -lg">
        This company was led by a group of disgusting, horrible people, and I&rsquo;m glad the world can finally see them for the absolute bags of shit they are.
    </p>
    <p class="text -lg">
        Despite all of that, I got to work with a group of wonderful people in the product and tech teams, and we worked on genuinely interesting stuff. So here&rsquo;s what I got up to while I was there.
    </p>
</Block>

<Block props={{ "class":"general", "id":"global-markets" }}>
    <h2 class="text -xl -sans -bold -uppercase">Moving into European markets</h2>
    <p class="text -xl">
        Verve&rsquo;s product was built specifically for the UK. One of my first projects after joining was getting it ready for our European expansion <span class="mark -em">&mdash;</span> Germany, France and the Netherlands. That came down to two main areas: the sales flow and localising the entire product.
    </p>
    <div class="columns -two spacing -gap-lg -m-t-lg -m-b-lg">
        <Image src="work/verve/global-markets/001-drafts-1.png" alt="Sketches from a brainstorming session" parent={{ "class":"img-zoom border -r-sm -s-base colour -bg -bg-light-dark spacing -mw-xxl", "data-zoom":3 }}/>
        <Image src="work/verve/global-markets/001-drafts-2.png" alt="Sketches from a brainstorming session" parent={{ "class":"img-zoom border -r-sm -s-base colour -bg -bg-light-dark spacing -mw-xxl", "data-zoom":3 }}/>
    </div>
    <p class="text -lg">
        The sales flow needed rethinking for two reasons. The most important was that it had to comply with strict anti-spam laws, specifically in Germany. The second was that it was outdated for our target audience. Localisation was critical for launch, not just translation, but address formats, currencies and payment methods.
    </p>
    <p class="text -lg">
        The project ran over four months. It involved more than 30 user interviews across multiple countries, four major iterations on the flow (plus plenty of minor ones), working with three different translation agencies to find the right fit, a stack of usability tests, and a few legal meetings to make sure we weren&rsquo;t breaking those anti-spam laws.
    </p>
    <Slider bg="accent-b-light">
        <Image src="work/verve/global-markets/003-final-1.png" alt="Final mobile screen for ticket flow" parent={{ "class":"slide" }}/>
        <Image src="work/verve/global-markets/003-final-2.png" alt="Final mobile screen for ticket flow" parent={{ "class":"slide" }}/>
        <Image src="work/verve/global-markets/003-final-3.png" alt="Final mobile screen for ticket flow" parent={{ "class":"slide" }}/>
        <Image src="work/verve/global-markets/003-final-4.png" alt="Final mobile screen for ticket flow" parent={{ "class":"slide" }}/>
        <Image src="work/verve/global-markets/003-final-5.png" alt="Final mobile screen for ticket flow" parent={{ "class":"slide" }}/>
        <Image src="work/verve/global-markets/003-final-6.png" alt="Final mobile screen for ticket flow" parent={{ "class":"slide" }}/>
    </Slider>
</Block>

<Block props={{ "class":"general", "id":"iconography" }}>
    <h2 class="text -xl -sans -bold -uppercase">Creating new iconography</h2>
    <p class="text -xl">
        The product&rsquo;s original icons were quick designs knocked out for the MVP. After assessing the product in my first week, I wanted an icon set that was actually built for it <span class="mark -em">&mdash;</span> more cohesive, with guidelines for any future icons. I pitched it to the Head of Design, got the go-ahead, and designed the set along with the guidelines to go with it.
    </p>
    <Link props={{ "class":"-external layout -a-s-start", "label":{"data-text":"View some of the icons", "class":"text -serif -xl"}, "href":"https://codepen.io/noureddinemade/full/mBWyxz", "data-window":true }}/>
    <div class="columns -two spacing -gap-lg -m-t-lg -m-b-lg">
        <Image src="work/verve/iconography/001-guidelines.png" alt="Iconography guidelines" parent={{ "class":"img-zoom border -r-sm -s-base colour -bg -bg-light-dark spacing -mw-xxl", "data-zoom":3 }}/>
        <Image src="work/verve/iconography/002-final-2.png" alt="Responsive icon examples" parent={{ "class":"img-zoom border -r-sm -s-base colour -bg -bg-light-dark spacing -mw-xxl", "data-zoom":3 }}/>
    </div>
</Block>

<Block props={{ "class":"general", "id":"recruit-pages" }}>
    <h2 class="text -xl -sans -bold -uppercase">Making recruit pages more helpful</h2>
    <p class="text -xl">
        Clients recruit ambassadors using a recruit page for a specific festival or campaign. The old pages didn&rsquo;t explain much. They had a brief, vague overview of everything and they gave the client very little room to customise for their brand.
    </p>
    <div class="columns -two spacing -gap-lg -m-t-lg -m-b-lg">
        <Image src="work/verve/recruit-pages/001-drafts.png" alt="Rough wireframe sketch of a recruit page" parent={{ "class":"img-zoom border -r-sm -s-base colour -bg -bg-light-dark spacing -mw-xxl", "data-zoom":3 }}/>
        <Image src="work/verve/recruit-pages/002-wireframes.png" alt="Wireframes of variations of a recruit page" parent={{ "class":"img-zoom border -r-sm -s-base colour -bg -bg-light-dark spacing -mw-xxl", "data-zoom":3 }}/>
    </div>
    <p class="text -lg">
        After a lot of user interviews with potential ambassadors across Europe, North America, Australia and New Zealand, we found the most critical things they wanted to know before signing up: how it all works, what they could earn, and what being an ambassador was actually like.
    </p>
    <p class="text -lg">
        Work on this feature ran for three months. Two of those I spent based in Australia, running 20 user interviews with potential ambassadors. Working remotely 10 hours ahead was a real challenge. I was completely isolated from my team, and it was also bloody hot.
    </p>
    <Slider bg="accent-f-light">
        <Image src="work/verve/recruit-pages/003-final-1.png" alt="Final desktop designs for recruit pages - A demo brand sample"/>
        <Image src="work/verve/recruit-pages/003-final-2.png" alt="Final desktop designs for recruit pages - Using Bestival branding"/>
        <Image src="work/verve/recruit-pages/003-final-3.png" alt="Final desktop designs for recruit pages - Using Aston Villa branding"/>
        <Image src="work/verve/recruit-pages/003-final-4.png" alt="Final desktop designs for recruit pages - Using Countdown branding"/>
        <Image src="work/verve/recruit-pages/003-final-5.png" alt="Final desktop designs for recruit pages - Using Circuit of the Americas branding"/>
    </Slider>
</Block>

<Block props={{ "class":"general", "id":"sports-and-travel" }}>
    <h2 class="text -xl -sans -bold -uppercase">Expanding the product</h2>
    <p class="text -xl">
        My last two projects were group events and seated events, both part of the company&rsquo;s expansion into travel and sporting events.
    </p>
    <p class="text -lg">
        We kicked off with two full-day workshops. We spoke with several experts at Ticketek (our ticketing partner at the time) and ran user interviews with current ambassadors, who&rsquo;d been vocal about how frustrating it was trying to sell to groups for festivals.
    </p>
    <div class="columns -three spacing -gap-xs -m-t-lg -m-b-lg">
        <Image src="work/verve/sports-and-travel/001-journey-1.png" alt="Simplified journey map - festival flow" parent={{ "class":"img-zoom border -r-sm -s-base colour -bg -bg-light-light", "data-zoom":2 }}/>
        <Image src="work/verve/sports-and-travel/001-journey-2.png" alt="Simplified journey map - sport flow variation 1" parent={{ "class":"img-zoom border -r-sm -s-base colour -bg -bg-light-light", "data-zoom":2 }}/>
        <Image src="work/verve/sports-and-travel/001-journey-3.png" alt="Simplified journey map - sport flow variation 2" parent={{ "class":"img-zoom border -r-sm -s-base colour -bg -bg-light-light", "data-zoom":2 }}/>
        <Image src="work/verve/sports-and-travel/001-journey-4.png" alt="Simplified journey map - sport flow variation 3" parent={{ "class":"img-zoom border -r-sm -s-base colour -bg -bg-light-light", "data-zoom":2 }}/>
        <Image src="work/verve/sports-and-travel/001-journey-5.png" alt="Simplified journey map - touring flow variation 1" parent={{ "class":"img-zoom border -r-sm -s-base colour -bg -bg-light-light", "data-zoom":2 }}/>
        <Image src="work/verve/sports-and-travel/001-journey-6.png" alt="Simplified journey map - touring flow variation 2" parent={{ "class":"img-zoom border -r-sm -s-base colour -bg -bg-light-light", "data-zoom":2 }}/>
        <Image src="work/verve/sports-and-travel/001-journey-7.png" alt="Simplified journey map - travel flow variation 1" parent={{ "class":"img-zoom border -r-sm -s-base colour -bg -bg-light-light", "data-zoom":2 }}/>
        <Image src="work/verve/sports-and-travel/001-journey-8.png" alt="Simplified journey map - travel flow variation 2" parent={{ "class":"img-zoom border -r-sm -s-base colour -bg -bg-light-light", "data-zoom":2 }}/>
        <Image src="work/verve/sports-and-travel/001-journey-9.png" alt="Simplified journey map - venue flow" parent={{ "class":"img-zoom border -r-sm -s-base colour -bg -bg-light-light", "data-zoom":2 }}/>
    </div>
    <p class="text -lg">
        From there I put together some basic flows showing the core differences between our existing product and how the new features would change it. Then some very crude mock-ups and prototypes, and a few usability testing sessions with existing ambassadors. I got to the final designs, and we were starting to pitch to several US-based companies and sporting franchises.
    </p>
    <Slider bg="accent-a-light">
        <Image src="work/verve/sports-and-travel/003-final-1.png" alt="Final mobile screen - Sports Flow" parent={{ "class":"slide" }}/>
        <Image src="work/verve/sports-and-travel/003-final-2.png" alt="Final mobile screen - Sports Flow" parent={{ "class":"slide" }}/>
        <Image src="work/verve/sports-and-travel/003-final-3.png" alt="Final mobile screen - Sports Flow" parent={{ "class":"slide" }}/>
        <Image src="work/verve/sports-and-travel/003-final-4.png" alt="Final mobile screen - Sports Flow" parent={{ "class":"slide" }}/>
        <Image src="work/verve/sports-and-travel/003-final-5.png" alt="Final mobile screen - Sports Flow" parent={{ "class":"slide" }}/>
        <Image src="work/verve/sports-and-travel/003-final-6.png" alt="Final mobile screen - Sports Flow" parent={{ "class":"slide" }}/>
        <Image src="work/verve/sports-and-travel/003-final-7.png" alt="Final mobile screen - Sports Flow" parent={{ "class":"slide" }}/>
        <Image src="work/verve/sports-and-travel/003-final-8.png" alt="Final mobile screen - Sports Flow" parent={{ "class":"slide" }}/>
        <Image src="work/verve/sports-and-travel/003-final-9.png" alt="Final mobile screen - Sports Flow" parent={{ "class":"slide" }}/>
        <Image src="work/verve/sports-and-travel/003-final-10.png" alt="Final mobile screen - Sports Flow" parent={{ "class":"slide" }}/>
        <Image src="work/verve/sports-and-travel/003-final-11.png" alt="Final mobile screen - Sports Flow" parent={{ "class":"slide" }}/>
        <Image src="work/verve/sports-and-travel/003-final-12.png" alt="Final mobile screen - Sports Flow" parent={{ "class":"slide" }}/>
        <Image src="work/verve/sports-and-travel/003-final-13.png" alt="Final mobile screen - Sports Flow" parent={{ "class":"slide" }}/>
        <Image src="work/verve/sports-and-travel/003-final-14.png" alt="Final mobile screen - Sports Flow" parent={{ "class":"slide" }}/>
        <Image src="work/verve/sports-and-travel/003-final-15.png" alt="Final mobile screen - Sports Flow" parent={{ "class":"slide" }}/>
        <Image src="work/verve/sports-and-travel/003-final-16.png" alt="Final mobile screen - Sports Flow" parent={{ "class":"slide" }}/>
        <Image src="work/verve/sports-and-travel/003-final-17.png" alt="Final mobile screen - Sports Flow" parent={{ "class":"slide" }}/>
        <Image src="work/verve/sports-and-travel/003-final-18.png" alt="Final mobile screen - Sports Flow" parent={{ "class":"slide" }}/>
        <Image src="work/verve/sports-and-travel/003-final-19.png" alt="Final mobile screen - Sports Flow" parent={{ "class":"slide" }}/>
        <Image src="work/verve/sports-and-travel/003-final-20.png" alt="Final mobile screen - Sports Flow" parent={{ "class":"slide" }}/>
        <Image src="work/verve/sports-and-travel/003-final-21.png" alt="Final mobile screen - Sports Flow" parent={{ "class":"slide" }}/>
        <Image src="work/verve/sports-and-travel/003-final-23.png" alt="Final mobile screen - Sports Flow" parent={{ "class":"slide" }}/>
        <Image src="work/verve/sports-and-travel/003-final-24.png" alt="Final mobile screen - Sports Flow" parent={{ "class":"slide" }}/>
    </Slider>
    
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">Wrapping up my time there</h2>
    <p class="text -xl">
        Here&rsquo;s the honest part: I left before I got to see how most of it turned out.
    </p>
    <p class="text -lg">
        The icons were the one piece that shipped and got used while I was there. The recruit pages were still in development. The events work had reached final designs, and we were just starting to pitch to US companies and franchises. The European expansion <span class="mark -em">&mdash;</span> I did the work, but I was gone before I could tell you how the launch actually landed.
    </p>
    <p class="text -lg">
        That&rsquo;s a lot of different problems in a short stretch: new markets, a fresh icon system, a recruitment rebuild, and two new product lines. I&rsquo;m proud of the range of it. I just wish it had happened somewhere that didn&rsquo;t treat people the way they did. Good work, wrong place. Given everything in that intro, leaving wasn&rsquo;t a hard decision.
    </p>
</Block>

<!-- Cursor Attachments -->
<span class="cursor-attach -tag" id="next">Next Slide</span>
<span class="cursor-attach -tag" id="prev">Previous Slide</span>