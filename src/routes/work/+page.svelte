<script>
    import { onMount } from "svelte";
    import { toggleInit } from "$lib/script/toggle";

    import Block from "$lib/component/layout/Block.svelte";
    import PageHeader from "$lib/component/layout/PageHeader.svelte";
    import Role from "$lib/component/data/Role.svelte";
    import Link from "$lib/component/action/Link.svelte";
    import Emoji from "$lib/component/asset/Emoji.svelte";
    import CompanyIcon from "$lib/component/asset/CompanyIcon.svelte";

    const caseCursor = { "data-cursor":"", "data-cursor-attach":"#readCaseStudy" };

    onMount(() => {
        toggleInit();
    });

</script>

<PageHeader props={{ "content":{ "class":"spacing -mw-lg" } }}>
    <h1 class="text -headline -sans -uppercase">
        Here&rsquo;s a curated selection of my work from the last twenty years.
    </h1>
</PageHeader>

<Block props={{ "class":"work" }}>

    <Role id="dub">
        Conversation capture and intelligence <CompanyIcon id="dub"/> out-of-the-box AI solutions that help businesses uncover value from recordings. Owned product design and grew the team that built an <Link props={{ "href":"/work/dubber/accessibility", "label":{"data-text":"accessible"}, ...caseCursor }} />, data-focused <Link props={{ "href":"/work/dubber/design-system", "label":{"data-text":"design system"}, ...caseCursor }} />, dropping custom code from 85% down to 20%. Mentored designers and shaped how we worked. Led hands-on <Emoji emoji="🖐🏽" /> designing the way users query their data in plain language, making <Link props={{ "href":"/work/dubber/extracted-data", "label":{"data-text":"extracted data into something users could explore"}, ...caseCursor }} />, rebuilding the web platform, and <Link props={{ "href":"/work/dubber/illustration-tool", "label":{"data-text":"buiding internal tools"}, ...caseCursor }} />.
    </Role>

    <Role id="soh">
        Digital healthcare <CompanyIcon id="soh"/> across four brands <CompanyIcon id="sop"/> <CompanyIcon id="sod"/> <CompanyIcon id="kap"/> <CompanyIcon id="renu"/> and three countries <Emoji emoji="🇬🇧🇩🇪🇦🇺"/>. Ran design end-to-end and shaped the culture. Set roadmaps and stayed hands-on <span class="emoji">🤙🏽</span> building a <Link props={{ "href":"/work/soh/admin-system", "label":{"data-text":"task based system"}, ...caseCursor }} /> for pharmacists to manage patients and orders that improved high volume tasks. Created a cohesive, multi-brand design system, a <Link props={{ "href":"/work/dubber/holistic-care", "label":{"data-text":"holistic weight care product"}, ...caseCursor }} />, and an <Link props={{ "href":"/work/dubber/app-experience", "label":{"data-text":"NHS prescriptions mobile experience"}, ...caseCursor }} /> that never got built. Redesigned Australia specific flows to keep the service compliant as new regulations came in, and rebuilt one brand&rsquo;s entire digital experience in Webflow.
    </Role>
    
    <Role id="echo">
        NHS repeat prescription management <CompanyIcon id="echo"/> deeply tied into the GP system behind it. Led patient-facing design across web and mobile. <Link props={{ "href":"/work/dubber/app-experience", "label":{"data-text":"Created the first web experience"}, ...caseCursor }} /> for a product that until then was app-only <Emoji emoji="📱"/> the first channel that could bring patients in outside the app. Shipped key reminder <Emoji emoji="⏰" addOnClasses="animation -alarm-clock"/> features, improved critical app functions, and conceptualised the core third-party integration flows.
    </Role>

    <Role id="ver">
        Ambassador-led ticketing platform <CompanyIcon id="ver"/> selling through personal networks. Worked across the web product in a cross-functional team of engineers, researchers and product owners, taking features from discovery <Emoji emoji="🔍" text=""/> through to ship. Led the <Link props={{ "href":"/work/verve/various-projects#", "label":{"data-text":"sales flow for the company&rsquo;s expansion into Europe"}, ...caseCursor }} />, rebuilt to clear strict anti-spam law in markets like <Emoji emoji="🇩🇪"/> Germany. Redesigned the global checkout, <Link props={{ "href":"/work/verve/various-projects#", "label":{"data-text":"created a new iconography system"}, ...caseCursor }} />, reworked the ambassador <Link props={{ "href":"/work/verve/various-projects#", "label":{"data-text":"recruit pages"}, ...caseCursor }} />, and designed the experience for the move into <Link props={{ "href":"/work/verve/various-projects#", "label":{"data-text":"seated group events and sporting events"}, ...caseCursor }} />.
    </Role>
    
    <Role id="ga">
        Tech education company <CompanyIcon id="ga"/> focused on immersive, industry-led teaching. Taught the practical, industry side of UX design and worked with the instructional team to reshape the curriculum and course structure. Sat one-on-one with students <Emoji emoji="🧑🏽‍💻"/> lectured on visual design and branding, ran tutorials on forms and mobile design, and led workshops on development and industry tools.
    </Role>
    
    <!-- <CompanyIcon company="nm"/> -->
    <Role id="nm">
        Freelance, contract and consultation work across product, digital and brand. Designed digital experiences and campaigns for worldwide clients <CompanyIcon id="umg"/> <CompanyIcon id="nis"/> <CompanyIcon id="toy"/> <CompanyIcon id="bmw"/> <CompanyIcon id="vw"/> <CompanyIcon id="ww"/> <CompanyIcon id="dj"/> <CompanyIcon id="nzab"/>. Ran research and usability testing for a building-material marketplace, built the kiosk experience for diabetes tools with CDM London, and designed and built a <Link props={{ "href":"/work/archive/chronic-pain-communication-tool", "label":{"data-text":"free communication tool for people living with chronic pain"}, ...caseCursor }} /> with NPS MedicineWise.
    </Role>



</Block>

<!-- Floating Elements -->
<span class="cursor-attach -tag" id="readCaseStudy">Read Case Study</span>
<span class="cursor-attach -tag" id="dubName">Dubber</span>
<span class="cursor-attach -tag" id="sohName">Simple Online Healthcare</span>
<span class="cursor-attach -tag" id="sopName">Simple Online Pharmacy</span>
<span class="cursor-attach -tag" id="sodName">Simple Online Doctor</span>
<span class="cursor-attach -tag" id="kapName">Kapsel</span>
<span class="cursor-attach -tag" id="renuName">Renu</span>
<span class="cursor-attach -tag" id="echoName">Echo</span>
<span class="cursor-attach -tag" id="verName">StreetTeam / Verve</span>
<span class="cursor-attach -tag" id="gaName">General Assembly</span>
<span class="cursor-attach -tag" id="umgName">Universal Music</span>
<span class="cursor-attach -tag" id="nisName">Nissan</span>
<span class="cursor-attach -tag" id="toyName">Toyota</span>
<span class="cursor-attach -tag" id="bmwName">BMW</span>
<span class="cursor-attach -tag" id="vwName">Volkswagen</span>
<span class="cursor-attach -tag" id="wwName">Woolworths</span>
<span class="cursor-attach -tag" id="djName">David Jones</span>
<span class="cursor-attach -tag" id="nzabName">New Zealand All Blacks</span>