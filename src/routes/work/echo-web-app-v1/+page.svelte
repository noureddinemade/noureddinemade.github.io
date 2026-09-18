<script lang="ts">

    import { caseStudySetup } from "$lib/script/caseStudy.svelte";

    // Components
    import Block from "$lib/component/layout/Block.svelte";
    import PageHeader from "$lib/component/layout/PageHeader.svelte";
    import Image from "$lib/component/asset/Image.svelte";
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
    <p class="text -xxl">
        My primary project after starting at Echo was to design the brand new web app. Up until then, Echo was an app-only product, and that app looked extremely techie and cool <span class="mark -em">&mdash;</span> excellent if you were tech-savvy and on the younger side, less so for everyone else. The web app was a way to widen the audience and lower the barrier to getting started.
    </p>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">Research &amp; planning</h2>
    <p class="text -xl">
        Working alongside a great user researcher and product owner, we started planning our approach. We brainstormed what we thought the core user wants would be, the potential issues, and the main flows.
    </p>
    <p class="text -lg -justify">
        Then we ran some basic initial user interviews to find out whether our planning was on the right track. One of the strongest themes to come out of them was concern over patients just getting whatever medication they wanted.
    </p>
    <p class="text -lg -justify">
        In reality this couldn&rsquo;t happen becausae everything is checked with the patient&rsquo;s GP surgery. However, it raised an interesting point about presenting the product so people clearly understood we weren&rsquo;t handing out access to anything and everything.
    </p>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">Wireframes &amp; concepts</h2>
    <p class="text -xl">
        While the research was ongoing, I started on basic wireframes and concepts. For the second set of user interviews, we wanted to present our idea for the product visually, so we could get feedback on it.
    </p>
    <p class="text -lg">
        I created a very basic wireframe that doubled as a click-through prototype, visualising the journey for the patient. I also started working on how we&rsquo;d let the patient focus on the task at hand. Other than sign-up, the add and request medication flows were complicated. Unlike regular ecommerce flows, they had parts that needed the patient&rsquo;s full focus.
    </p>
    <div class="columns -two spacing -gap-lg -m-t-lg -m-b-lg">
        <Image src="work/echo/web-v1/001-draft-layers.png" alt="An abstract sketch of the layers concept" parent={{}} props={{ "class":"border -r-sm -s-base colour -bg -bg-light-dark spacing" }}/>
        <Image src="work/echo/web-v1/002-draft-wireframe-1.png" alt="A rough wireframe sketch of the first layer" parent={{}} props={{ "class":"border -r-sm -s-base colour -bg -bg-light-dark spacing" }}/>
        <Image src="work/echo/web-v1/002-draft-wireframe-2.png" alt="A rough wireframe sketch of the second layer" parent={{}} props={{ "class":"border -r-sm -s-base colour -bg -bg-light-dark spacing" }}/>
        <Image src="work/echo/web-v1/002-draft-wireframe-3.png" alt="A rough wireframe sketch of the  layer" parent={{}} props={{ "class":"border -r-sm -s-base colour -bg -bg-light-dark spacing" }}/>
    </div>
    <p class="text -lg">
        This got me thinking about the web app in terms of layers. The first layer was the general app interface, areas where flows can be initiated. The second was the flow layer, where the patient progresses through the flow, fills out forms and so on. The final layer was the confirmation layer (basically a modal layer) where a patient confirms actions.
    </p>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">Designs</h2>
    <p class="text -xl">
        After the second set of interviews with the basic wireframe prototype, I moved on to the final designs. Most of the research outcomes were positive, with the negatives only around things we hadn&rsquo;t visualised in the wireframes <span class="mark -em">&mdash;</span> like brand trust and security.
    </p>
    <Slider bg="accent-a-light">
        <Image src="work/echo/web-v1/003-final-desktop-1.png" alt="Final desktop design - Empty state of the home page"/>
        <Image src="work/echo/web-v1/003-final-desktop-2.png" alt="Final desktop design - Populated home page variation"/>
        <Image src="work/echo/web-v1/003-final-desktop-3.png" alt="Final desktop design - Populated home page variation"/>
        <Image src="work/echo/web-v1/003-final-desktop-4.png" alt="Final desktop design - Populated home page variation"/>
        <Image src="work/echo/web-v1/003-final-desktop-5.png" alt="Final desktop design - Populated home page variation"/>
        <Image src="work/echo/web-v1/003-final-desktop-6.png" alt="Final desktop design - Populated home page variation"/>
        <Image src="work/echo/web-v1/003-final-desktop-7.png" alt="Final desktop design - Populated home page variation"/>
        <Image src="work/echo/web-v1/003-final-desktop-8.png" alt="Final desktop design - Empty state of the medication page"/>
        <Image src="work/echo/web-v1/003-final-desktop-9.png" alt="Final desktop design - Populated medication page variation"/>
        <Image src="work/echo/web-v1/003-final-desktop-10.png" alt="Final desktop design - Populated medication page variation"/>
        <Image src="work/echo/web-v1/003-final-desktop-11.png" alt="Final desktop design - Populated medication page variation"/>
        <Image src="work/echo/web-v1/003-final-desktop-12.png" alt="Final desktop design - Sign up flow step 1"/>
        <Image src="work/echo/web-v1/003-final-desktop-13.png" alt="Final desktop design - Sign up flow step 2"/>
        <Image src="work/echo/web-v1/003-final-desktop-14.png" alt="Final desktop design - Sign up flow step 3"/>
        <Image src="work/echo/web-v1/003-final-desktop-15.png" alt="Final desktop design - Sign up flow step 4"/>
        <Image src="work/echo/web-v1/003-final-desktop-16.png" alt="Final desktop design - Sign up flow step 5"/>
        <Image src="work/echo/web-v1/003-final-desktop-17.png" alt="Final desktop design - Add medication flow step 1"/>
        <Image src="work/echo/web-v1/003-final-desktop-18.png" alt="Final desktop design - Add medication flow step 1"/>
        <Image src="work/echo/web-v1/003-final-desktop-19.png" alt="Final desktop design - Request prescription flow step 1"/>
        <Image src="work/echo/web-v1/003-final-desktop-20.png" alt="Final desktop design - Request prescription flow step 2"/>
        <Image src="work/echo/web-v1/003-final-desktop-21.png" alt="Final desktop design - Request prescription flow confirmation"/>
    </Slider>
    
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">Partial launches</h2>
    <p class="text -xl">
        Since we already had an existing user base, we decided to build the request flow first and release it to a group of our existing patients to get data back.
    </p>
    <p class="text -xl">
        Once it was out, we gathered data for two weeks from hundreds of patient requests. The feedback was overwhelmingly positive, so we carried on with the partial-release plan. Next up were the sign-up and add medication flows. With those three flows built, we could start bringing in new patients entirely via the web.
    </p>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">Conclusion</h2>
    <p class="text -xxl">
        After three months of further design revisions and development, the MVP was built: the three main flows plus a basic settings area. Since then, more features have been added. Features like: additional patients per account for carers and family members, and IM1 integration, which allows direct communication with the GP surgery.
    </p>
</Block>