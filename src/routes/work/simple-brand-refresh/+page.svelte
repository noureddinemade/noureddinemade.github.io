<script lang="ts">

    import { caseStudySetup } from "$lib/script/caseStudy.svelte";

    // Components
    import Block from "$lib/component/layout/Block.svelte";
    import PageHeader from "$lib/component/layout/PageHeader.svelte";
    import Image from "$lib/component/asset/Image.svelte";

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
    <p class="text -xxl">
        The previous brand didn&rsquo;t accurately reflect what Simple Online Pharmacy was about. The business was entering a new phase and needed a brand that reflected that, and made it clear to people what it meant.
    </p>
    <div class="columns -two spacing -gap-lg -m-t-lg">
        <p class="text -xl">
            The old brand was never consistent either. It showed up across the products in different variations, the visual style was never properly defined, and it got misused internally. The goal of the new brand was to convey where Simple Online Pharmacy sat in a market full of online pharmacies. Some competitors focused on cheap, others on premium. We sat in the middle: affordable and dependable, that&rsquo;s what the new brand had to reflect.
        </p>
        <Image src="work/soh/brand-refresh/001-logo-original.png" alt="<REPLACE>" parent={{}} props={{ "class":"border -r-sm -s-base colour -bg -bg-light-dark spacing" }}/>
    </div>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">What does the brand represent?</h2>
    <p class="text -xl">
        <span class="mark -highlight colour -bg -bg-accent-f-base text -contrast">The co-founders had a clear idea of what the brand represented</span>, so to make the most of that I ran a short workshop with both of them to explore Simple&rsquo;s vision, purpose and mission. I left them with homework: each co-founder had to come up with a set of adjectives for what the brand was, and another set for what it wasn&rsquo;t.
    </p>
    <p class="text -xl">
        In the next session we dug into that homework and refined the adjectives down to four for what the brand was and three for what it wasn&rsquo;t. This was an important step <span class="mark -em">&mdash;</span> it&rsquo;s what defined the brand&rsquo;s tone and personality.
    </p>
    <div class="columns -two spacing -m-t-lg -m-b-lg -gap-md">
        <Image src="work/soh/brand-refresh/001-adjectives-1.png" alt="<REPLACE>" parent={{ "class":"img-zoom border -r-sm -s-base colour -bg -bg-light-dark spacing -p-sm", "data-zoom":4 }}/>
        <Image src="work/soh/brand-refresh/001-adjectives-2.png" alt="<REPLACE>" parent={{ "class":"img-zoom border -r-sm -s-base colour -bg -bg-light-dark spacing -p-sm", "data-zoom":4 }}/>
    </div>
    <Image src="work/soh/brand-refresh/001-adjectives-refined.png" alt="<REPLACE>" parent={{ "class":"img-zoom border -r-sm -s-base colour -bg -bg-light-base spacing -p-xl"}}/>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">Concepts &amp; ideas</h2>
    <p class="text -xl -justify">
        My first idea was to rename the brand. Something more memorable and less wordy, something that could work globally and give the brand more of a healthcare feel than just a pharmacy.
    </p>
    <Image src="work/soh/brand-refresh/002-concept-wordmark.png" alt="<REPLACE>" parent={{ "class":"img-zoom border -r-sm -s-base colour -bg -bg-light-light spacing -m-t-lg -m-b-lg"}}/>
    <p class="text -lg -justify">
        After several discussions and pitches to the co-founders, the name change was a no-go. It was too central to the SEO strategy and too high a risk to change at that stage of the business. So we had to rebrand with the existing name.
    </p>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">Logo</h2>
    <p class="text -xl">
        I needed a mark for Simple Online Pharmacy that could hold everything the company stood for, stay memorable and modern, and not need redoing every time trends shifted.
    </p>
    <div class="columns -two spacing -m-t-lg -m-b-lg -gap-md">
        <Image src="work/soh/brand-refresh/003-concept-marks-raw.png" alt="<REPLACE>" parent={{ "class":"img-zoom border -r-sm -s-base colour -bg -bg-light-light spacing -p-md", "data-zoom":4 }}/>
        <Image src="work/soh/brand-refresh/003-concept-marks-refined.png" alt="<REPLACE>" parent={{ "class":"img-zoom border -r-sm -s-base colour -bg -bg-light-light spacing -p-md", "data-zoom":4 }}/>
    </div>
    <p class="text -lg">
        I played around with a lot of concepts before settling on a direction. I knew the wordmark was always going to be limited by the length of the name, so the priority went on the mark.
    </p>
    <p class="text -lg">
        The mark is built from eight leaf-inspired shapes looped in a circle, connecting in the middle. It represents the relationship the brand wants with our patients, across every part of the business. From the tech team building the products to the pharmacy team dispensing medication, we&rsquo;re always around to make sure they get the best care.
    </p>
    <Image src="work/soh/brand-refresh/004-final-logo-full.png" alt="<REPLACE>" desc="The leaf came from a simple instinct: the natural, nurturing shape resonated with me as something that matched the company&rsquo;s personality." props={{ "class":"img-zoom border -r-sm -s-base colour -bg -bg-light-light spacing -p-md -m-t-lg"}}/>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">Colouring in a pharmacy</h2>
    <p class="text -xl">
        We wanted to stay close to the existing palette so the transition from old brand to new was as smooth as possible. I modernised the core blue and expanded the shades and tints to give us more to work with. This was our Simple Blue.
    </p>
    <p class="text -lg">
        I added a secondary purple (Simple Purple) and a tertiary yellow (Simple Yellow), giving us three brand colours in total. Expanding the palette gave us an extra layer to communicate with. We could use colour to emphasise things without them getting confused with links or primary actions.
    </p>
    <Image src="work/soh/brand-refresh/005-colours.png" alt="<REPLACE>" props={{ "class":"spacing -m-t-lg -m-b-lg" }}/>
    <p class="text -lg">
        There was also a set of three UI colours:
    </p>
    <ul class="base text -lg -serif">
        <li>Neutral black with a hint of Simple Blue for text, content and general backgrounds.</li>
        <li>Positive green for all the happy outcomes in the UI.</li>
        <li>Danger red for all the negative or high-risk situations in the UI.</li>
    </ul>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">Typography</h2>
    <p class="text -xl">
        One of the biggest requirements from the business was that the typography had to be available in every piece of software we use. That was a problem with the previous brand <span class="mark -em">&mdash;</span> there was no defined font, so teams used whatever they wanted.
    </p>
    <p class="text -lg">
        In the end we went with two simple Google fonts: Karla for the main brand and Roboto for everything else. This meant every department could access the font on the tools they actually used. From the management team in Google Docs all the way to the warehouse team printing shipping labels.
    </p>
    <div class="columns -two spacing -m-t-lg -m-b-lg -gap-md">
        <Image src="work/soh/brand-refresh/006-typography-3.png" alt="<REPLACE>" parent={{}} props={{ "class":"img-zoom border -r-sm -s-base colour -bg -bg-light-dark" }}/>
        <Image src="work/soh/brand-refresh/006-typography-5.png" alt="<REPLACE>" parent={{}} props={{ "class":"img-zoom border -r-sm -s-base colour -bg -bg-light-dark" }}/>
        <Image src="work/soh/brand-refresh/006-typography-6.png" alt="<REPLACE>" parent={{}} props={{ "class":"img-zoom border -r-sm -s-base colour -bg -bg-light-dark" }}/>
        <Image src="work/soh/brand-refresh/006-typography-2.png" alt="<REPLACE>" parent={{}} props={{ "class":"img-zoom border -r-sm -s-base colour -bg -bg-light-dark" }}/>
    </div>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">Conclusion</h2>
    <p class="text -xxl">
        The brand has had its soft launch and is now on all digital products and most print material. Once the new NHS web app launches, it&rsquo;ll get its full debut.
    </p>
    <div class="img-slider border -r-sm -s-base colour -bg -bg-accent-e-light spacing -p-xl -m-t-lg -m-b-lg" data-draggable data-cursor="🤚🏽">
        <Image src="work/soh/brand-refresh/004-final-logo-mark.png" alt="<REPLACE>"/>
        <Image src="work/soh/brand-refresh/004-final-logo-mark-splash-app.png" alt="<REPLACE>"/>
        <Image src="work/soh/brand-refresh/004-final-logo-print.png" alt="<REPLACE>"/>
        <Image src="work/soh/brand-refresh/004-final-logo-on-website.png" alt="<REPLACE>"/>
        <Image src="work/soh/brand-refresh/004-final-logo-lanyard.png" alt="<REPLACE>"/>
        <Image src="work/soh/brand-refresh/004-final-logo-biz-cards.png" alt="<REPLACE>"/>
    </div>
</Block>