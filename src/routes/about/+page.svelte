<script>
    import { onMount } from "svelte";
    import { followInit } from "$lib/script/effect";

    import Block from "$lib/component/layout/Block.svelte";
    import PageHeader from "$lib/component/layout/PageHeader.svelte";
    import Image from "$lib/component/asset/Image.svelte";
    import Tags from "$lib/component/data/Tags.svelte";
    import Link from "$lib/component/action/Link.svelte";

    onMount(() => followInit());

</script>

<PageHeader props={{ "class":"spacing -p-b-none" }}>
    <h1 class="text -headline -sans -uppercase">
        Nice to meet you, <br>I&rsquo;m Noureddine.
    </h1>
</PageHeader>

<Block props={{ "class":"general", "content": { "class":"spacing -mw-xl -gap-xl" } }}>
    <p class="text -xxl -justify" data-cursor="text">
        I&rsquo;ve spent the last two decades designing all kinds of <span class="text -sans -bold -xl -uppercase">great</span>, <span class="text -sans -bold -xl -uppercase">fun</span>, <span class="text -sans -bold -xl -uppercase">awful</span>, <span class="text -sans -bold -xl -uppercase">cute</span>, <span class="text -sans -bold -xl -uppercase">boring</span> and <span class="text -italic -push">(most importantly)</span> <span class="text -sans -bold -xl -uppercase">useful</span> things. In that time, tools changed, industries shifted and the internet empowered evil. The one constant is what I actually do <span class="mark -em">&mdash;</span> solve real problems.
    </p>
    <div class="columns -two spacing -gap-xxl">
        <div class="item spacing -gap-md">
            <p class="text -xl -justify" data-cursor="text">
                My design philosophy is simple: <span class="mark -highlight colour -bg -bg-accent-e-light text -contrast">don&rsquo;t make people&rsquo;s lives harder.</span> Whether I&rsquo;m designing for end users, leading a team, or choosing who to work for, underneath all of it is one thing <span class="mark -em">&mdash;</span> humans. Centre them in the work, focus on problems that matter to them, and don&rsquo;t help companies that make things worse.
            </p>
            <p class="text -xl -justify" data-cursor="text">
                Outside of design, I spend my time with my amazing wife and our beautiful, demon of a cat. I enjoy markets, lazy &ldquo;hikes&rdquo;, <span class="mark -crossed -a">cooking</span> bookmarking recipes, analogue objects, and I&rsquo;m currently <span class="text -italic -push">(very slowly)</span> building a video game.
            </p>
            <Image src="icon/star-01.svg" alt="" props={{"class":"florish -about colour -fill -fill-accent-a-light", "role":"presentation", "data-sticky-rotate": "250"}}/>
        </div>
        <div class="profile-photo-wrap" data-cursor="👋🏽" data-cursor-attach="#hello" data-follow data-folow-axis-x data-follow-reach="0" data-follow-nudge="2" data-follow-tilt="5" data-follow-axis-x>
            <div class="-fg" data-follow data-follow-reach="0" data-follow-lerp=".05" data-follow-nudge="30" data-follow-axis-x>
                <Image src="photo/profile-fg@2x.png" alt="A film photograph of Noureddine from the waste up smiling while standing outdoors wearing a black beanie and a red rain coat." props={{"class":"-follow"}}/>
            </div>
            <Image src="photo/profile-bg@2x.png" alt="A film photograph of Noureddine from the waste up smiling while standing outdoors wearing a black beanie and a red rain coat." props={{"class":"-bg"}}/>
        </div>
    </div>
</Block>

<Block props={{ "class":"general spacing -m-b-xxl", "content": { "class":"spacing -mw-xl" } }}>

    <div class="columns -two spacing -gap-xl -m-b-xl">
        <h2 class="text -xl -sans -uppercase">
            What can I help with?
        </h2>
        <Tags tags={['End-to-end Design', 'Zero-to-one Design', 'Design Systems', 'Design Strategy and Leadership', 'Product Focused Branding']} bg='dark-dark -bg -bg-accent-d-light -text -text-dark-dark text -xl -serif -regular'/>
    </div>
    <div class="columns -two spacing -gap-xl -m-b-xl">
        <h2 class="text -xl -sans -uppercase">
            Want to work together?
        </h2>
        <p class="text -xl -serif -regular">
            I&rsquo;m currently <span class="mark -underline -b colour -fill -fill-accent-a-base">open to work</span> but before you reach out, please check to make sure that <Link props={{ "href":"/fitcheck/", "label":{"data-text":"we&rsquo;re a good fit"} }} />.
        </p>
    </div>
    <div class="columns -two spacing -gap-xl">
        <h2 class="text -xl -sans -uppercase">
            About this website
        </h2>
        <p class="text -xl -serif -regular">
            Built with <Link props={{ "class":"-external", "href":"https://svelte.dev/docs/kit/introduction", "data-window":"true", "label":{"data-text":"SvelteKit"} }}/>. 
            Text is set in <Link props={{ "class":"-external", "href":"https://www.issamtype.com/product/mirety-a-nostalgic-editorial-serif-family/", "data-window":"true", "label":{"data-text":"Mirety"} }}/> and <Link props={{ "class":"-external text -sans -uppercase -bold -lg", "href":"https://www.estudiocalderon.com/typefaces/ocelot/", "data-window":"true", "label":{"data-text":"Ocelot"} }}/>. Every single part of this portfolio was designed and built by hand with <span class="mark -highlight colour -bg -bg-accent-e-base"> zero AI used</span> <span class="mark -em">&mdash;</span> why destroy the world just to show you I&rsquo;m a good designer.
        </p>
    </div>

</Block>

<span class="cursor-attach -tag" id="hello">Hello!</span>