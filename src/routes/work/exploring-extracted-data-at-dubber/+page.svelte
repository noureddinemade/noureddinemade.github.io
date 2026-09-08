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
    <p class="text -xl">
        At Dubber, we had to design for more than just the end user. We were also designing for a chain of resellers and telecom partners who would have to explain it to their customers.
    </p>
    <div class="columns -two spacing -gap-lg">
        <p class="text -lg -justify">
            In this case, we were working on a specific piece of extracted data. Without giving away the magic, it worked like this: entities are pulled from the recorded conversation based on contextual criteria related to the overall Moment (a specific instance within a conversation identified by context) and then sorted into a predefined topic.
        </p>
        <p class="text -lg -justify">
            So, how do we take this absolute gold mine of logic and data, and figure out how to make it brand-able, sellable and (most importantly) usable?
        </p>
    </div>
    <Image src="work/dub/connections/entities-flow.png" alt="A high level flow diagram of the conversation to connection to moments and topics." props={{ "class":"spacing -m-t-lg -m-b-lg -p-t-lg -p-b-lg -p-r-lg -p-l-lg colour -bg -bg-accent-d-light border -rounded -r-md -s-base" }}/>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">Prototyping</h2>
    <p class="text -xl">
        Given that we had strict time constraints on this project and the data was too complicated to navigate with anything static, I decided to skip past wireframes (despite what all those famous thought leaders on LinkedIn say, I find wire-framing to be really important to my process).
    </p>
    <p class="text -lg">
        Using real sample data provided by the AI team, I built a fully functional prototype. This prototype provided users with a simple interface that showed all the predefined topics of a Moment, and allowed them to click on these topics and see the related entities. It also let them filter the entities using basic text input.
    </p>
    <div class="item spacing -m-t-lg" data-tabs="Entities Prototype">
        <div class="btn-group -tabs">
            <Button 
                props={{ 
                    "class":"-tab", "data-tab-trigger":"prototype-video", "data-cursor":"link", "data-cursor-aim":"true",
                    "label":{ "data-text":"Prototype Video" } 
                }}
            />
            <Button 
                props={{ 
                    "class":"-tab -off", "data-tab-trigger":"live-prototype", "data-cursor":"link", "data-cursor-aim":"true",
                    "label":{ "data-text":"Live Prototype" } 
                }}
            />
        </div>
        <div class="item" data-tab-target="prototype-video">
            <Video 
                vid="work/dub/connections/prototype.mp4"
                props={{ 
                    "aria-label":"The prototype built in Codepen. Showing the interactions and filter functions.",
                    "poster":"",
                    "class":"border -rounded -r-md -s-base spacing -p-t-xl -p-b-xl -p-r-xl -p-l-xl colour -bg -bg-accent-a-light",
                    "autoplay":true, "muted":true, "loop":true
            }}/>
        </div>
        <div class="codepen-wrapper border -r-md -s-base -off" data-tab-target="live-prototype" data-cursor="">
            <p class="codepen" data-height="800" data-pen-title="connections-proto" data-slug-hash="rNgGoyz" data-user="noureddinemade" data-token="71f2b1bc897be01db6ffd4fd701b83f1" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/noureddinemade/pen/rNgGoyz/71f2b1bc897be01db6ffd4fd701b83f1">
            connections-proto</a> by Noureddine Azhar (<a href="https://codepen.io/noureddinemade">@noureddinemade</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
            <script async src="https://public.codepenassets.com/embed/index.js"></script>
        </div>
    </div>
</Block>

<Block props={{ "class":"general" }}>
    <div class="columns -two spacing -gap-lg">
        <div class="item sticky -top-xxl">
            <h2 class="text -xl -sans -bold -uppercase">Testing Internally</h2>
            <p class="text -xl -justify">
                Our capacity for robust testing was pretty much non-existent at that time. However, we had access to people internally who didn&rsquo;t know anything about this project and hadn&rsquo;t seen our brand new (and shiny) design system. Now we could focus these sessions on understanding (the visuals) and expectations of what this could actually do <span class="mark -em">&mdash;</span> hopefully leading to some really valuable information.
            </p>
            <p class="text -lg -justify">
                Over the course of a single day, I managed to find eight people to test with. There was no reason to give any information up front, so each session was very loose. They simply played around with the prototype.
            </p>
            <p class="text -lg -justify">
                Understanding was the biggest success. All participants understood the concept and were able to demonstrate it in under five minutes (four were able to do it in under a minute). What caused friction was the language used and minor usability issues <span class="mark -em">&mdash;</span> both of which were reasonable, easy fixes. Expectation is where we got the most helpful feedback; almost all of it focused on how the user would dig deeper and find out more.
            </p>
        </div>
        <div class="item">
            <Image src="work/dub/connections/sticky-1.png" alt="3 sticky notes showing some feedback from the testing sessions." props={{ "class":"sticky -top-xxl" }} />
            <Image src="work/dub/connections/sticky-2.png" alt="3 sticky notes showing some feedback from the testing sessions." props={{ "class":"sticky -top-xxl" }} />
            <Image src="work/dub/connections/sticky-3.png" alt="3 sticky notes showing some feedback from the testing sessions." props={{ "class":"sticky -top-xxl" }} />
        </div>
    </div>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">Finding a name</h2>
    <p class="text -xl">
        While we were testing and iterating, I started working on the brand-able aspect of the project <span class="mark -em">&mdash;</span> finding a suitable name. Using a naming framework that I&rsquo;ve refined over my career, I got product and design to answer questions and send suggestions. All done asynchronously as we couldn&rsquo;t get time to sit together for a naming workshop.
    </p>
    <p class="text -xl">
        Some names that were suggested and rejected by the framework were: Cue (easily confused with queue), Thread (too close to message threads, a concept that already existed in the product) and Tie (just sounded awful in usage). But we did find a winner, <span class="text -sans -uppercase -bold">Connection</span>. It worked not just because it was easy to use within the product but because it described this feature very clearly, a connection between topic and value.
    </p>
    <Image src="work/dub/connections/naming.png" alt="A board that shows the process of the naming framework applied to Entities." props={{ "class":"spacing -p-t-xl -p-b-xl -p-l-xl -p-r-xl" }} parent={{ "class":"img-zoom border -r-sm -s-base spacing -m-t-lg colour -bg -bg-light-light", "data-zoom":3 }} />
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">Sell Sell Sell</h2>
    <p class="text -xl">
        The sellable part was for our sales team to plan and execute. My role was making sure they had what they needed. Through training sessions with sales, customer service and support teams, we went through testing outcomes, the naming process, and the functionality of Connections. These sessions also allowed them to contribute by providing feedback that wasn't around usability but instead focused on branding and copy.
    </p>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">Wrapping it up</h2>
    <p class="text -xl">
        The final design for Connections used Switchboard, Dubber&rsquo;s design system that the product design team I led <Link props={{ "href":cases[2].href, "label":{ "data-text":"built from the ground up"} }}/>. Helping users dig deeper and find out more was critical, so I redesigned the block by decoupling it from topics. This allowed users to start at Connection and (via a click interaction) see a full breakdown, essentially flipping the concept that was tested.
    </p>
    <Video 
        vid="work/dub/connections/final.mp4"
        props={{ 
            "aria-label":"The prototype built in Codepen. Showing the interactions and filter functions.",
            "poster":"",
            "class":"border -rounded -r-md -s-base spacing -mw-xxl -m-t-lg -m-b-lg",
            "autoplay":true, "muted":true, "loop":true
    }}/>
    <p class="text -xxl">
        With version 1 wrapped up, we were able to tackle two critical areas: looking for something specific and discovery. Connections was now live and usage data was coming in every day, hopefully leading us to a bigger and better second version.
    </p>
</Block>