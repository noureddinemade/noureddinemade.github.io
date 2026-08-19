<script lang="ts">

    import { cases } from "$lib/data/glossary";

    import Role from "../data/Role.svelte";
    import CompanyIcon from "../asset/CompanyIcon.svelte";
    import Link from "../action/Link.svelte";
    import Emoji from "../asset/Emoji.svelte";

    const caseCursor = { "data-cursor":"", "data-cursor-attach":"#readCaseStudy" };

</script>

<Role id="dub">
    Conversation capture and intelligence <CompanyIcon id="dub"/> out-of-the-box AI solutions that help businesses uncover value from recordings. Owned product design and grew the team that built an <Link props={{ "href":cases[0].href, "label":{"data-text":"accessible"}, ...caseCursor }} />, data-focused <Link props={{ "href":cases[1].href, "label":{"data-text":"design system"}, ...caseCursor }} />, dropping custom code from 85% down to 20%. Mentored designers and shaped how we worked. Led hands-on <Emoji emoji="🖐🏽" /> designing the way users query their data in plain language, making <Link props={{ "href":cases[2].href, "label":{"data-text":"extracted data into something users could explore"}, ...caseCursor }} />, rebuilding the web platform, and <Link props={{ "href":cases[3].href, "label":{"data-text":"buiding internal tools"}, ...caseCursor }} />.
</Role>

<Role id="soh">
    Digital healthcare <CompanyIcon id="soh"/> across four brands <CompanyIcon id="sop"/> <CompanyIcon id="sod"/> <CompanyIcon id="kap"/> <CompanyIcon id="renu"/> and three countries <Emoji emoji="🇬🇧🇩🇪🇦🇺"/>. Ran design end-to-end and shaped the culture. Set roadmaps and stayed hands-on <span class="emoji">🤙🏽</span> building a <Link props={{ "href":cases[4].href, "label":{"data-text":"task based system"}, ...caseCursor }} /> for pharmacists to manage patients and orders that improved high volume tasks. Created a cohesive, multi-brand design system, a <Link props={{ "href":cases[5].href, "label":{"data-text":"holistic weight care product"}, ...caseCursor }} />, and an <Link props={{ "href":cases[7].href, "label":{"data-text":"NHS prescriptions mobile experience"}, ...caseCursor }} /> that never got built. Redesigned Australia specific flows to keep the service compliant as new regulations came in, and rebuilt one brand&rsquo;s entire digital experience in Webflow.
</Role>

<Role id="echo">
    NHS repeat prescription management <CompanyIcon id="echo"/> deeply tied into the GP system behind it. Led patient-facing design across web and mobile. <Link props={{ "href":cases[8].href, "label":{"data-text":"Created the first web experience"}, ...caseCursor }} /> for a product that until then was app-only <Emoji emoji="📱"/> the first channel that could bring patients in outside the app. Shipped key reminder <Emoji emoji="⏰" addOnClasses="animation -alarm-clock"/> features, improved critical app functions, and conceptualised the core third-party integration flows.
</Role>

<Role id="ver">
    Ambassador-led ticketing platform <CompanyIcon id="ver"/> selling through personal networks. Worked across the web product in a cross-functional team of engineers, researchers and product owners, taking features from discovery <Emoji emoji="🔍" text=""/> through to ship. Led the <Link props={{ "href":cases[10].href, "label":{"data-text":"sales flow for the company&rsquo;s expansion into Europe"}, ...caseCursor }} />, rebuilt to clear strict anti-spam law in markets like <Emoji emoji="🇩🇪"/> Germany. Redesigned the global checkout, reworked the ambassador <Link props={{ "href":cases[11].href, "label":{"data-text":"recruit pages"}, ...caseCursor }} />, <Link props={{ "href":cases[12].href, "label":{"data-text":"created a new iconography system"}, ...caseCursor }} />, and designed the experience for the move into <Link props={{ "href":cases[13].href, "label":{"data-text":"seated group events and sporting events"}, ...caseCursor }} />.
</Role>

<Role id="ga">
    Tech education company <CompanyIcon id="ga"/> focused on immersive, industry-led teaching. Taught the practical, industry side of UX design and worked with the instructional team to reshape the curriculum and course structure. Sat one-on-one with students <Emoji emoji="🧑🏽‍💻"/> lectured on visual design and branding, ran tutorials on forms and mobile design, and led workshops on development and industry tools.
</Role>

<Role id="nm">
    Freelance, contract and consultation work across product, digital and brand. Designed digital experiences and campaigns for worldwide clients <CompanyIcon id="umg"/> <CompanyIcon id="nis"/> <CompanyIcon id="toy"/> <CompanyIcon id="bmw"/> <CompanyIcon id="vw"/> <CompanyIcon id="ww"/> <CompanyIcon id="dj"/> <CompanyIcon id="nzab"/>. Ran research and usability testing for a building-material marketplace, built the kiosk experience for diabetes tools with CDM London, and designed and built a <Link props={{ "href":cases[14].href, "label":{"data-text":"free communication tool for people living with chronic pain"}, ...caseCursor }} /> with NPS MedicineWise.
</Role>