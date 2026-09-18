<script lang="ts">

    import { caseStudySetup } from "$lib/script/caseStudy.svelte";

    // Components
    import Block from "$lib/component/layout/Block.svelte";
    import PageHeader from "$lib/component/layout/PageHeader.svelte";
    import Image from "$lib/component/asset/Image.svelte";
    import Video from "$lib/component/asset/Video.svelte";

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
    <h2 class="text -xl -sans -bold -uppercase">Overview</h2>
    <p class="text -xxl">
        In the UK, 1 in 2 people are on long-term repeat prescriptions and 1 in 3 often forget to order them. That&rsquo;s where our NHS app comes in.
    </p>
    <p class="text -xl">
        The web app had recently had work done before I arrived, so the focus shifted to the NHS app first <span class="mark -em">&mdash;</span> it hadn&rsquo;t been touched since it was built. It was riddled with UX issues and couldn&rsquo;t handle the influx of new NHS patients.
    </p>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">Goal</h2>
    <p class="text -xl">
        The goal was a better experience for the NHS product, plus a patient area that could serve all areas of the business, not just the NHS. We decided the MVP would focus on the main NHS flows: sign up, add medication and request medication.
    </p>
    <Image src="work/soh/app-experience/001-coreflows.png" alt="<REPLACE>" props={{ "class":"border -r-sm -s-base colour -bg -bg-light-light spacing -m-t-lg -p-xl" }}/>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">Planning &amp; research</h2>
    <p class="text -xl">
        I started by looking at the existing NHS repeat-prescription apps. Given NHS regulations and the specific nature of these apps, mapping out the common patterns felt like the right place to begin.
    </p>
    <p class="text -lg">
        Like us, most of our competitors didn&rsquo;t have IM1 integration. IM1 let us connect directly with the patient&rsquo;s GP surgery and cut down the amount of information the patient had to give us. It also let them request their repeat straight from their GP, without having to search for and add their medication manually.
    </p>
    <p class="text -lg">
        Our IM1 integration was still in its very early stages, so I needed another way to reduce what the patient had to provide up front. Not many competitors could do this, so I saw it as a way to give us a leg up at sign-up.
    </p>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">Concepts &amp; drafts</h2>
    <p class="text -xl">
        Starting with the app played to something we already wanted: a mobile-first approach. Over 70% of our patients accessed the web app on a mobile, so apart from a few mobile-only features and specifics, we could reuse most of the components designed for mobile on the web app too.
    </p>
    <div class="columns -two spacing -m-t-lg -m-b-lg -gap-md">
        <Image src="work/soh/app-experience/002-wireframes-1.png" alt="<REPLACE>" parent={{}} props={{ "class":"border -r-sm -s-base colour -bg -bg-light-dark spacing" }}/>
        <Image src="work/soh/app-experience/002-wireframes-2.png" alt="<REPLACE>" parent={{}} props={{ "class":"border -r-sm -s-base colour -bg -bg-light-dark spacing" }}/>
        <Image src="work/soh/app-experience/002-wireframes-3.png" alt="<REPLACE>" parent={{}} props={{ "class":"border -r-sm -s-base colour -bg -bg-light-dark spacing" }}/>
        <Image src="work/soh/app-experience/002-wireframes-4.png" alt="<REPLACE>" parent={{}} props={{ "class":"border -r-sm -s-base colour -bg -bg-light-dark spacing" }}/>
    </div>
    <p class="text -lg">
        I built a basic wireframe and prototype for the core flows to test the concept of reducing the key pieces of information. After several usability tests and user interviews, it was clear the concept landed. The amount of information the patient provided was the same, but placing it across different areas of the main flows made it feel quicker and less of a commitment up front.
    </p>
    <div class="img-slider border -r-sm -s-base colour -bg -bg-light-dark spacing -p-sm -m-t-lg -m-b-lg" data-draggable data-cursor="🤚🏽">
        <Image src="work/soh/app-experience/003-wireframe-1.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/003-wireframe-2.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/003-wireframe-3.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/003-wireframe-4.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/003-wireframe-5.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/003-wireframe-6.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/003-wireframe-7.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/003-wireframe-8.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/003-wireframe-9.png" alt="<REPLACE>"/>
    </div>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">Designs</h2>
    <p class="text -xl">
        With the concepts finalised, it was time to start on the final designs. I wanted to keep the app as clean and minimal as possible.
    </p>
    <div class="img-slider border -r-sm -s-base colour -bg -bg-accent-d-light spacing -p-sm -m-t-lg -m-b-lg" data-draggable data-cursor="🤚🏽">
        <Image src="work/soh/app-experience/004-final-1.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/004-final-2.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/004-final-3.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/004-final-4.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/004-final-5.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/004-final-6.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/004-final-7.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/004-final-8.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/004-final-9.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/004-final-10.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/004-final-11.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/004-final-12.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/004-final-13.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/004-final-14.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/004-final-15.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/004-final-16.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/004-final-17.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/004-final-18.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/004-final-19.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/004-final-20.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/004-final-21.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/004-final-22.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/004-final-23.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/004-final-24.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/004-final-25.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/004-final-26.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/004-final-27.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/004-final-28.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/004-final-29.png" alt="<REPLACE>"/>
        <Image src="work/soh/app-experience/004-final-30.png" alt="<REPLACE>"/>
    </div>
    <p class="text -xl">
        I also wanted to make sure it didn&rsquo;t look designed for one specific audience. Our product was for anyone on repeat prescriptions <span class="mark -em">&mdash;</span> so the design had to cater to everyone.
    </p>
    <Video 
        vid="work/soh/app-experience/interaction.mp4"
        props={{ 
            "aria-label":"Using the system to perform a first time call task",
            "poster":"",
            "class":"border -rounded -r-md -s-base spacing -m-t-lg",
            "autoplay":true, "muted":true, "loop":true
    }}/>
</Block>

<Block props={{ "class":"general" }}>
    <h2 class="text -xl -sans -bold -uppercase">Conclusion</h2>
    <p class="text -xl">
        Now for the sad part. After the app was designed and a lot of progress had been made on the front end, problems on the back end brought development to a halt. For a range of reasons (including the old backend system not being able to handle many of the new system&rsquo;s requirements), we couldn&rsquo;t carry on.
    </p>
    <p class="text -xl">
        We hit a point on the front end where there was nothing more we could do until the new backend was finished. So I shifted focus to projects that didn&rsquo;t rely on engineers, since their efforts were now entirely on the backend system.
    </p>
</Block>