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
    <p class="text -xxl">
        My primary project after starting at Echo was to design the brand new web app. Up until then, Echo was an app-only product, and that app looked extremely techie and cool — excellent if you were tech-savvy and on the younger side, less so for everyone else. The web app was a way to widen the audience and lower the barrier to getting started.
    </p>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">Research &amp; planning</h2>
    <p class="text -xl">
        Working alongside a great user researcher and product owner, we started planning our approach. We brainstormed what we thought the core user wants would be, the potential issues, and the main flows.
    </p>
    <p class="text -lg">
        Then we ran some basic initial user interviews to find out whether our planning was on the right track. One of the strongest themes to come out of them was concern over patients just getting whatever medication they wanted.
    </p>
    <p class="text -lg">
        In reality this couldn't happen — everything is checked with the patient's GP surgery — but it raised an interesting point about presenting the product so people clearly understood we weren't handing out access to anything and everything.
    </p>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">Wireframes &amp; concepts</h2>
    <p class="text -xl">
        While the research was ongoing, I started on basic wireframes and concepts. For the second set of user interviews, we wanted to present our idea for the product visually, so we could get feedback on it.
    </p>
    <p class="text -lg">
        I created a very basic wireframe that doubled as a click-through prototype, visualising the journey for the patient. I also started working on how we'd let the patient focus on the task at hand. Other than sign-up, the add and request medication flows were complicated — unlike regular ecommerce flows, they had parts that needed the patient's full focus.
    </p>
    <p class="text -lg">
        This got me thinking about the web app in terms of layers. The first layer was the general app interface — the areas where flows can be initiated. The second was the flow layer, where the patient progresses through the flow, fills out forms and so on. The final layer was the confirmation layer — basically the modal layer, where the patient confirms actions.
    </p>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">Designs</h2>
    <p class="text -xl">
        After the second set of interviews with the basic wireframe prototype, I moved on to the final designs. Most of the research outcomes were positive, with the negatives only around things we hadn't visualised in the wireframes — like brand trust and security.
    </p>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">Partial launches</h2>
    <p class="text -xl">
        Since we already had an existing user base, we decided to build the request flow first and release it to a group of our existing patients to get data back.
    </p>
    <p class="text -lg">
        Once it was out, we gathered data for two weeks from hundreds of patient requests. The feedback was overwhelmingly positive, so we carried on with the partial-release plan. Next up were the sign-up and add medication flows. With those three flows built, we could start bringing in new patients entirely via the web.
    </p>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">Conclusion</h2>
    <p class="text -xl">
        After three months of further design revisions and development, the MVP was built: the three main flows plus a basic settings area.
    </p>
    <p class="text -xl">
        Since then, more features have been added — additional patients per account for carers and family members, and IM1 integration, which allows direct communication with the GP surgery.
    </p>
</Block>