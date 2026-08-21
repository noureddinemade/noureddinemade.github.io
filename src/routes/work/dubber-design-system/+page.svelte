<script lang="ts">

    import { caseStudySetup } from "$lib/script/caseStudy.svelte";
    import { cases } from "$lib/data/glossary";

    // Components
    import Block from "$lib/component/layout/Block.svelte";
    import PageHeader from "$lib/component/layout/PageHeader.svelte";
    import Button from "$lib/component/action/Button.svelte";
    import Image from "$lib/component/asset/Image.svelte";
    import Video from "$lib/component/asset/Video.svelte";
    import Link from "$lib/component/action/Link.svelte";

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
        <div class="img-zoom border -r-sm -s-base spacing colour -bg -bg-light-dark" data-zoom="5">
            <Image src="work/dub/design-system/old-file-1.png" alt="A screenshot of Figma showing basic styles and components." />
        </div>
        <div class="img-zoom border -r-sm -s-base spacing colour -bg -bg-light-dark" data-zoom="5">
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
        <div class="group -group-center spacing -gap-xs -mw-lg -p-t-xs -p-r-xs -p-b-xs -p-l-xs sticky -top-xxl -z-high border -r-md -s-base colour -bg -bg-light-base layout -f-a-center" data-switch-control="layers">
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
                The contribution process was framed around the idea that anyone in design or engineering could contribute to the design system. If you wanted to contribute, you would add it to the agenda of our weekly design review. In that design review you <span class="text -sans -md -uppercase -bold">explain</span> your reasoning behind this contribution, the team would then <span class="text -sans -md -uppercase -bold">critique</span> and analyse it. If this contribution made sense and was worth adding to the design system, you then get to <span class="text -sans -md -uppercase -bold">implement</span> it and <span class="text -sans -md -uppercase -bold">own</span> it.
            </p>
            <p class="text -lg">
                Using this process ensured that everyone had true ownership over the design system. It also meant that <span class="mark -highlight colour -bg -bg-accent-e-base text -contrast">if you couldn&rsquo;t answer why, when, where and how to use a component, then it wasn&rsquo;t ready to add to the system.</span> Because this process was always going to happen while we were working on other business projects, it helped ensure that the team was building with purpose and only building the components we needed.
            </p>
        </div>
    </div>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xxl -sans -bold -uppercase">Plugging away</h2>
    <p class="text -xl">
        Documenting components is a very time consuming task. Existing Figma plugins provided varied outputs so using them as a starting point meant we would still need to spend time combining and standardising. AI couldn&rsquo;t bridge that gap either and could only provide the same outputs. So I decided to build a dedicated Figma plugin specific to our workflows, components and design system.
    </p>
    <p class="text -lg">
        I spent half a day working on the first version of the plugin. That first version automated all of the heavy lifting. It would take whatever components you selected and spit out a spec sheet. Figma&rsquo;s Dev mode covered a lot of the technical stuff, so the plugin didn&rsquo;t extensively cover those elements, instead focusing on the most important things. It provided a really clear and detailed anatomy of the component, listed all the dependencies (other components used in this component) and provided all of the relevant sections for that component. For example if a component had a hover interaction built into it, that interaction would be listed in the behaviour section. This meant that after running the plugin for a component, you would end up with a spec sheet pre-filled with everything that you needed to document it. All that was left up to the designer was to document the why, when, where and how in the relevant sections.
    </p>
    <div class="item spacing -m-t-lg -m-b-lg" data-tabs="Documentation Plugin">
        <div class="btn-group -tabs">
            <Button 
                props={{ 
                    "class":"-tab", "data-tab-trigger":"plugin-video", "data-cursor":"link", "data-cursor-aim":"true",
                    "label":{ "data-text":"The plugin in action" } 
                }}
            />
            <Button 
                props={{ 
                    "class":"-tab -off", "data-tab-trigger":"spec-sheets", "data-cursor":"link", "data-cursor-aim":"true",
                    "label":{ "data-text":"Component spec sheets in detail" } 
                }}
            />
        </div>
        <div class="item" data-tab-target="plugin-video">
            <Video 
                vid="work/dub/design-system/ds-plugin.mp4"
                props={{ 
                    "aria-label":"The plugin in action. The user selects a component and runs the plugin, which generates the spec sheet.",
                    "poster":"",
                    "class":"border -rounded -r-md -s-base",
                    "autoplay":true,
                    "muted":true,
                    "loop":true
            }}/>
        </div>
        <div class="item -off spacing -gap-xl" data-tab-target="spec-sheets">
            <div class="columns -two spacing -gap-xl">
                <div class="item spacing -gap-md">
                    <h3 class="text -xl -sans -bold -uppercase">Plugin Output</h3>
                    <p class="text -lg -justify">
                        In this example, the plugin was used on the <span class="text -mono -md -contrast mark -highlight colour -bg -bg-light-dark">button</span> component. It has prefilled every technical bit related to the ccomponent and has generated the relevant blocks for us to fill out the additional context.
                    </p>
                </div>
                <div class="item spacing -gap-md">
                    <h3 class="text -xl -sans -bold -uppercase">Final</h3>
                    <p class="text -lg -justify">
                        The final spec sheet now has all the additional context that the plugin had no way of knowing/extracting. Things like behaviour, usage and copywriting.
                    </p>
                </div>
            </div>
            <div class="columns -two spacing -gap-xl">
                <div class="item">
                    <Image src="work/dub/design-system/comp-before-01.png" alt="A component spec sheet generated by the plugin."  props={{ "class":"border -rounded -r-md -s-base" }}/>
                </div>
                <div class="item">
                    <Image src="work/dub/design-system/comp-after-01.png" alt="A component spec sheet generated by the plugin."  props={{ "class":"border -rounded -r-md -s-base" }}/>
                </div>
            </div>
            <div class="columns -two spacing -gap-xl">
                <div class="item">
                    <Image src="work/dub/design-system/comp-before-02.png" alt="A component spec sheet generated by the plugin."  props={{ "class":"border -rounded -r-md -s-base" }}/>
                </div>
                <div class="item">
                    <Image src="work/dub/design-system/comp-after-02.png" alt="A component spec sheet generated by the plugin."  props={{ "class":"border -rounded -r-md -s-base" }}/>
                </div>
            </div>
            <div class="columns -two spacing -gap-xl">
                <div class="item">
                    <Image src="work/dub/design-system/comp-before-03.png" alt="A component spec sheet generated by the plugin."  props={{ "class":"border -rounded -r-md -s-base" }}/>
                </div>
                <div class="item">
                    <Image src="work/dub/design-system/comp-after-03.png" alt="A component spec sheet generated by the plugin."  props={{ "class":"border -rounded -r-md -s-base" }}/>
                </div>
            </div>
            <div class="columns -two spacing -gap-xl">
                <div class="item">
                    <Image src="work/dub/design-system/comp-before-04.png" alt="A component spec sheet generated by the plugin."  props={{ "class":"border -rounded -r-md -s-base" }}/>
                </div>
                <div class="item">
                    <Image src="work/dub/design-system/comp-after-04.png" alt="A component spec sheet generated by the plugin."  props={{ "class":"border -rounded -r-md -s-base" }}/>
                </div>
            </div>
            <div class="columns -two spacing -gap-xl">
                <div class="item">
                    <Image src="work/dub/design-system/comp-before-05.png" alt="A component spec sheet generated by the plugin."  props={{ "class":"border -rounded -r-md -s-base" }}/>
                </div>
                <div class="item">
                    <Image src="work/dub/design-system/comp-after-05.png" alt="A component spec sheet generated by the plugin."  props={{ "class":"border -rounded -r-md -s-base" }}/>
                </div>
            </div>
        </div>
    </div>
    <p class="text -lg">
        To ensure this plugin automation gave us the optimal output, I created a set of strict guidelines around the design and build of components in Figma, covering things like names for variants, boolean usage and specific interactions. The naming also reflected industry standards on the development side. This helped bridge the gap in handoff and the use of AI tools to build prototypes.
    </p>
    <Image src="work/dub/design-system/property-rules-annotated.png" alt="Annotated component property structure"  props={{ "class":"border -rounded -r-md -s-base colour -bg -bg-accent-c-light spacing  -mw-xxl -m-t-lg -m-b-lg -p-t-lg -p-b-lg -p-r-lg -p-l-lg" }} />
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xxl -sans -bold -uppercase">Build Baby</h2>
    <p class="text -xl">
        Building the design system without disrupting the current work in place was the next challenge. From the design side of things, we didn&rsquo;t have to worry about core logic or any really impactful breaking changes, even when things broke, it was isolated in a design file. On the engineering side, this was something different. This was where our newly created and documented design system began to shine. I ran a kick off session with design and engineering to introduce the components and the documentation. Using the same method as before, I paired designers with engineers and asked them to spend time together over a few days finding components directly related to the work they were doing. Then we all got back together and assigned components/patterns to each initiative. 
    </p>
    <p class="text -xl">
        Every time work was being done on a project, we&rsquo;d build a few components alongside it. That didn&rsquo;t mean that every single component would be applied immediately, it just meant the component would be built and ready for use. Then at every opportunity we had, we&rsquo;d start applying the components.
    </p>
    <div class="columns -two spacing -gap-lg -m-t-xl -m-b-xl">
        <div class="item spacing -gap-xxl">
            <Image alt="" src="work/dub/design-system/token-1-figma-raw.svg" props={{ "class":"sticky -top-xxl" }} />
            <Image alt="" src="work/dub/design-system/token-2-figma-reference.svg" props={{ "class":"sticky -top-xxl" }} />
            <Image alt="" src="work/dub/design-system/token-3-figma-contrast.svg" props={{ "class":"sticky -top-xxl" }} />
            <Image alt="" src="work/dub/design-system/token-4-css-raw.svg" props={{ "class":"sticky -top-xxl" }} />
            <Image alt="" src="work/dub/design-system/token-5-css-reference.svg" props={{ "class":"sticky -top-xxl" }} />
            <Image alt="" src="work/dub/design-system/token-6-css-contrast.svg" props={{ "class":"sticky -top-xxl" }} />
            <Image alt="" src="work/dub/design-system/token-7-css-usage.svg" props={{ "class":"sticky -top-xxl" }} />
        </div>
        <p class="text -lg -gap-lg sticky -top-xxl">
            The first and most impactful thing we did was bring the tokens into the build. Bringing tokens in meant that the design and engineering team now had shared vocabulary when it came to fundamental things like sizing and colours. While this was not a component and the result was not visible, the outcome of this change substantially improved handover efficiency. A token used in the design system translates to a css variable. Same name, same value, same structure.
        </p>
    </div>
    <p class="text -lg">
        Of the projects we were working on at the time, three gave us opportunities to start using elements from the design system. <Link props={{ "href":cases[2].href, "label":{ "data-text":"Connections used components"} }}/> like labels and data (progress bar), migrating users from the old portal allowed us to focus on login flows and navigation, which used input, button and sidebar components, and an AI overhaul of data presentation focused on charts and graph components. All of these projects also allowed us to start using the design system tokens. Given that these projects covered different areas of the product, we could cover significant ground across the system simultaneously. Even if that meant that one flow used a new component while the other flow used an old component, this was not a dealbreaker for me. We would never have a chance to stop everything just so we could make sure that we fully implement the design system, so progress had to be brick by brick.
    </p>
    <div class="columns -two spacing -gap-lg -m-t-lg">
        <div class="item spacing -gap-md sticky -top-xxl">
            <h3 class="text -xl -sans -bold -uppercase">Naming our baby</h3>
            <p class="text -lg -justify">
                The design system was currently being built and we could already see improvements to our workflows and output, but from the org&rsquo;s perspective outside of a few updates about progress, there wasn&rsquo;t enough visibility about the design system. We were a few weeks away from releasing the first official version of the design system so I wanted to make sure the organisation understood the significance of what we were about to release. The problem was that it didn&rsquo;t have a name yet and referring to it as a design system was technical and cold. Along with my design team we had a very informal and fun session where we brainstormed potential names and ideas around it.
            </p>
            <p class="text -lg -justify">
                We came up with some great names (including giving it a human name because we all thought that was dumb and funny) but we eventually landed on something that resonated with us, Switchboard. The design system is all about communication, it&rsquo;s all about making sure you end up in the right place with the right information and historically that&rsquo;s what switchboards were all about. Dubber is a conversation intelligence company. Recording calls, analysing their value, working with telephony technologies. A switchboard felt like the right fit.
            </p>
        </div>
        <div class="item">
            <Image src="work/dub/design-system/switchboard-vert.png" alt="The Switchboard logo on a dark blue background." props={{ "class":"border -rounded -r-md -s-base" }}/>
        </div>
    </div>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xxl -sans -bold -uppercase">Release</h2>
    <p class="text -xl">
        Switchboard 1.0 shipped. <span class="mark -highlight colour -bg -bg-accent-a-light text -contrast">The first version included tokens, patterns, base illustrations and iconography, guidelines for copy within the product and over 30 fully documented components</span> (not counting helper and internal components). Handover sessions were more efficient than ever, communication between design and engineering became smoother and <span class="mark -highlight colour -bg -bg-accent-e-base text -contrast">most importantly, custom code at the time of this release had gone from around 85% down to around 20%.</span> The product, design and engineering teams were thrilled about this monumental release. Given the size of the teams and our existing workload, this was one of the proudest moments of my time at Dubber.
    </p>
    <div class="item spacing -gap-lg -m-t-lg -m-b-lg -mw-xxl">
        <div class="columns -two spacing -gap-lg">
            <div class="item">
                <Video 
                    vid="work/dub/design-system/buttons.mp4"
                    props={{ 
                        "aria-label":"The plugin in action. The user selects a component and runs the plugin, which generates the spec sheet.",
                        "poster":"",
                        "class":"border -rounded -r-md -s-base",
                        "autoplay":true, "muted":true, "loop":true
                }}/>
            </div>
            <div class="item">
                <Video 
                    vid="work/dub/design-system/sentiment.mp4"
                    props={{ 
                        "aria-label":"The plugin in action. The user selects a component and runs the plugin, which generates the spec sheet.",
                        "poster":"",
                        "class":"border -rounded -r-md -s-base",
                        "autoplay":true, "muted":true, "loop":true
                }}/>
            </div>
        </div>
        <div class="columns -two spacing -gap-lg">
            <div class="item">
                <Video 
                    vid="work/dub/design-system/topics.mp4"
                    props={{ 
                        "aria-label":"The plugin in action. The user selects a component and runs the plugin, which generates the spec sheet.",
                        "poster":"",
                        "class":"border -rounded -r-md -s-base",
                        "autoplay":true, "muted":true, "loop":true
                }}/>
            </div>
            <div class="item">
                <Video 
                    vid="work/dub/design-system/tags.mp4"
                    props={{ 
                        "aria-label":"The plugin in action. The user selects a component and runs the plugin, which generates the spec sheet.",
                        "poster":"",
                        "class":"border -rounded -r-md -s-base",
                        "autoplay":true, "muted":true, "loop":true
                }}/>
            </div>
        </div>
    </div>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xxl -sans -bold -uppercase">The Future</h2>
    <p class="text -xxl">
        A design system is a continuous piece of work, so whenever we had an opportunity, we would build it out further. That work continued until the current version of 1.3.1. While Switchboard was being developed and shipped, the company&rsquo;s leadership changed drastically <span class="mark -em">&mdash;</span> and despite its success, I lost my entire design team and over 70% of the product team. I won&rsquo;t bore you with my opinion on Dubber&rsquo;s current leadership, this is just what happens when those in charge have a fundamental lack of understanding about how integral product and design are to the success of a product.
    </p>
</Block>

<!-- Cursor Attachments -->
<span class="cursor-attach -tooltip" id="problem">
    Without listening to every single recorded call, how can we help businesses extract value that helps them understand their business more deeply. Then, how do we present it back to them in a way that makes sense and allows them to make impactful data driven decisions based on context.
</span>
<span class="cursor-attach -tag" id="l-c">Component</span>
<span class="cursor-attach -tag" id="l-g">Group</span>
<span class="cursor-attach -tag" id="l-f">Feature</span>
<span class="cursor-attach -tag" id="l-v">View</span>