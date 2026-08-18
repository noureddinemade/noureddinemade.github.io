<script lang="ts">

    import { caseStudySetup } from "$lib/script/caseStudy.svelte";

    // Components
    import Block from "$lib/component/layout/Block.svelte";
    import PageHeader from "$lib/component/layout/PageHeader.svelte";
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

<Block props={{ "class":"general" }}>

    <p class="text -xl">
        We were working on migrating from a legacy platform so I decided to run an accessibility audit to see what we could bring along without having to redesign a bunch of stuff when we didn&rsquo;t need to. Unfortunately, the results of that audit were very poor. <span class="mark -highlight colour -bg -bg-accent-e-base text -contrast">Heaps of failures across WCAG 2.1 success criteria.</span> Really basic stuff like contrast ratios (1.4.3, 1.4.11), keyboard navigation (2.1.1, 2.1.2), form inputs missing programmatic identification (1.3.5, 3.3.1) and focus states (2.4.7) for the majority of components. These weren&rsquo;t edge cases, they were fundamental barriers that made the platform severely inaccessible.
    </p>
    
    <Image src="work/dub/accessibility/wcag-map.svg" alt="" props={{ "class":"svg-wcag-map" }} parent={ {"class":"border -rounded -r-md -s-base colour -bg -bg-light-dark spacing -m-t-lg"} }/>
    <p class="text -xxl spacing -mw-xl">
        <span class="mark -highlight colour -bg -bg-accent-f-base text -contrast">
            I ran the audits using <span class="text -sans -xl -bold -uppercase">WAVE</span>, <span class="text -sans -xl -bold -uppercase">axe Accessibility Checker</span>, and <span class="text -sans -xl -bold -uppercase">Pa11y</span>, but these were just automations and tools that could only ever capture surface-level problems.
        </span>
    </p>

</Block>

<Block props={{ "class":"general" }}>

    <h2 class="text -xxl -sans -bold -uppercase">Blocked</h2>
    <div class="columns -two spacing -gap-lg">
        <p class="text -lg -justify">
            I knew that we would never get the time or a significant bump to the budget to allow us to try and achieve full compliance across all WCAG levels. An example is Sign language interpretation for video content (1.2.6, AAA). This wasn&rsquo;t feasible because of Dubber&rsquo;s infrastructure and budget. Another blocker was third party integrations with gaps that we could not control. So before building roadmaps and planning what we were going to prioritise, I decided that we needed real users to help us understand what the most critical barriers were.
        </p>
        <p class="text -lg -justify">
            This also came at a time where a few of our key partners had strict accessibility requirements because of the industries they serviced. This meant that we could tackle accessibility in a really meaningful way and would have full support from the leadership team given that if we don&rsquo;t get this sorted, revenue could be lost.
        </p>
    </div>

</Block>

<Block props={{ "class":"general" }}>

    <h2 class="text -xxl -sans -bold -uppercase">Real Users</h2>
    <p class="text -xl">
        With the support of a partner manager and after meeting with leadership, I was able to secure a budget for actual sessions with users and an accessibility specialist to lead them. We got 2 groups of users, 1 group of 5 people with visual impairments and a group of 3 with motor impairments.
    </p>
    <p class="text -lg">
        These sessions confirmed a lot of the issues and gaps we discovered during the initial audit. But they also gave us a critical insight into how these issues were directly affecting users. All 8 participants relied on 1 or more of assistive technologies like screen readers, keyboard-only navigation and voice control.
    </p>
    <p class="text -lg">
        One of these insights <span class="mark -em">&mdash;</span> which was provided repeatedly by people in both groups, was that users could not navigate the platform via a keyboard without getting lost. This was because of two things: no focus states and getting stuck (because there was no keyboard navigation at all). These were not minor inconveniences, <span class="mark -highlight colour -bg -bg-accent-d-light text -contrast">these were users that were being completely locked out of the product.</span>
    </p>

</Block>

<Block props={{ "class":"general" }}>

    <h2 class="text -xxl -sans -bold -uppercase">Building the strategy</h2>
    <p class="text -xl">
        With those sessions complete and all the data collected, sorted and analysed, I built a strategic roadmap. User Experience Enhancements, Compliance & Standards Alignment, Inclusive Design Practices, and Testing & Feedback (all the formal language). To be honest though, it really came down to just fixing what was broken. I prioritised <span class="text -sans -lg -bold -uppercase colour -text -text-accent-b-dark">contrast</span>, <span class="text -sans -lg -bold -uppercase colour -text -text-accent-b-dark">sizing</span>, and <span class="text -sans -lg -bold -uppercase colour -text -text-accent-b-dark">interactions</span> because our audits showed these were creating the most widespread problems. Low contrast made text unreadable for users with low vision, undersized touch targets made mobile navigation nearly impossible for users with motor impairments, and missing focus states locked out keyboard-only users entirely.
    </p>
    <p class="text -lg">
        The expectation from the executive team was that this work would not delay anything on the product roadmap. So it was a matter of connecting the accessibility roadmap to initiatives on the product road map. We did this officially in sprint planning, while planning the current sprint we would try and identify 1 or 2 accessibility initiatives that we could attach to the work being done, without it redefining the scope or creating a whole new project. Unofficially, I tasked my design team to try and sneak these in when they were working directly with engineers if there was a good opportunity to do it.
    </p>

</Block>

<Block props={{ "class":"image-slider", "draggable":"true", "content": { "class":"spacing -mw-xxl -p-l-xxl -p-r-xxl" } }}>

    <Image src="work/dub/accessibility/near-term.svg" alt="" props={{ "class":"svg-roadmap -nt spacing -m-l-xxl", "height":"920px" }}/>
    <Image src="work/dub/accessibility/mid-term.svg" alt="" props={{ "class":"svg-roadmap -mt", "height":"920px" }}/>
    <Image src="work/dub/accessibility/long-term.svg" alt="" props={{ "class":"svg-roadmap -lt spacing -m-r-xxl", "height":"920px" }}/>

    <ul class="key">
        <li class="colour -misc-accent-a-base">Near-term</li>
        <li class="colour -misc-accent-b-base">Mid-term</li>
        <li class="colour -misc-accent-c-base">Long-term</li>
    </ul>
    <ul class="key spacing -m-t-md -m-b-lg">
        <li data-number="1️⃣">Perceivable <span class="text -sm -subtle">(Hover)</span></li>
        <li data-number="2️⃣">Operable <span class="text -sm -subtle">(Hover)</span></li>
        <li data-number="3️⃣">Understandable <span class="text -sm -subtle">(Hover)</span></li>
        <li data-number="4️⃣">Robust <span class="text -sm -subtle">(Hover)</span></li>
    </ul>

</Block>

<Block props={{ "class":"general" }}>
    
    <h2 class="text -xxl -sans -bold -uppercase">Design System Integration</h2>
    <div class="columns -two spacing -gap-lg">
        <p class="text -lg -justify">
            I also ensured that accessibility checks were embedded directly into Switchboard (our design system) <a href="/work/dubber/design-system">while we were building it out</a>. Making sure that accessibility became part of the process and not just something we sprinkle on top. This process ensured <span class="mark -highlight colour -bg -bg-accent-f-base text -contrast">when we design and build, we would do it with WCAG compliance in mind.</span>
        </p>
        <p class="text -lg -justify">
            With each product initiative/feature, we tackled a few accessibility issues and gaps that were directly related to the components and flows that were being built.
        </p>
    </div>

    <div class="columns -two spacing -gap-sm">
        <div class="item">
            <Image src="work/dub/accessibility/comp-sheet.png" alt="The accessibility portion of the button component sheet." desc="Interactive components like buttons, required focus states, keyboard control and the correct aria labels." props={{ "data-cursor":"👁️", "class":"border -rounded -r-md -s-base" }}/>
        </div>
        <div class="item">
            <Image src="work/dub/accessibility/contrast-tokens.png" alt="A small selection of the contrast tokens used in the design system." desc="All colour tokens were linked to a default contrast text token." props={{ "data-cursor":"👁️", "class":"border -rounded -r-md -s-base" }}/>
        </div>
    </div>

</Block>

<Block props={{ "class":"general spacing -m-b-xxl", "content":{"class":"spacing -m-b-lg"}}}>

    <h2 class="text -xxl -sans -bold -uppercase">Fixing what matters</h2>
    <p class="text -xl">
        After several of these were complete we managed to achieve full implementation of core WCAG 2.1 AA criteria. We fixed contrast minimums (1.4.3), semantic HTML structure (1.3.1), keyboard operability (2.1.1), and visible focus indicators (2.4.7). The remaining gaps were documented in the roadmap with clear priorities and timelines along with which initiative or feature they would directly tie in with. Things like enhanced keyboard navigation across all modules (2.1.2), programmatic input identification (1.3.5), and responsive reflow at 200% zoom (1.4.4).
    </p>
    <p class="text -xl">
        We didn&rsquo;t fix everything, but <span class="mark -highlight colour -bg -bg-accent-a-dark text -contrast" data-cursor="✅">we made the product usable for people who couldn&rsquo;t touch it before.</span> This also resolved the biggest concerns that partners had when it came down to their accessibility requirements. But if I&rsquo;m being completely honest, my priority was to ensure that the people we spoke with (and others with accessibility requirements) were able to use our product and get the value they needed from it, without being blocked all together.
    </p>
    
</Block>

<!-- Cursor Attachments -->
<span class="cursor-attach -tag" id="p1">Perceivable</span>
<span class="cursor-attach -tag" id="p2">Operable</span>
<span class="cursor-attach -tag" id="p3">Understandable</span>
<span class="cursor-attach -tag" id="p4">Robust</span>