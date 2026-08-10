<script>
    import Block from "$lib/component/layout/Block.svelte";
    import PageHeader from "$lib/component/layout/PageHeader.svelte";
    import Role from "$lib/component/data/Role.svelte";
    import Link from "$lib/component/action/Link.svelte";

    const caseCursor = { "data-cursor":"", "data-cursor-attach":"#readCaseStudy" };
</script>

<PageHeader props={{ "data-sticky":"true", "data-sticky-offset":"244", "content":{ "class":"spacing -mw-lg" } }}>
    <h1 class="text -headline -sans -uppercase">
        Here&rsquo;s a curated selection of my work from the last twenty years.
    </h1>
</PageHeader>

<Block props={{ "class":"work" }}>

    <!-- <CompanyIcon company="dub"/> -->
    <Role id="dub">
        Conversation capture and intelligence !ICON! out-of-the-box AI solutions that help businesses uncover value from recordings. Owned product design and grew the team that built an <Link props={{ "href":"/work/dubber/accessibility", "label":{"data-text":"accessible"}, ...caseCursor }} />, data-focused <Link props={{ "href":"/work/dubber/design-system", "label":{"data-text":"design system"}, ...caseCursor }} />, dropping custom code from 85% down to 20%. Mentored designers and shaped how we worked. Led hands-on <span class="emoji" data-follow-hover><span class="-follow">🖐🏽</span></span> designing the way users query their data in plain language, making <Link props={{ "href":"/work/dubber/extracted-data", "label":{"data-text":"extracted data into something users could explore"}, ...caseCursor }} />, rebuilding the web platform, and <Link props={{ "href":"/work/dubber/illustration-tool", "label":{"data-text":"buiding internal tools"}, ...caseCursor }} />.
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