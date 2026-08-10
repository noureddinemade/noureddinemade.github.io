<script>
    import Block from "$lib/component/layout/Block.svelte";
    import PageHeader from "$lib/component/layout/PageHeader.svelte";
    import Image from "$lib/component/asset/Image.svelte";
</script>

<PageHeader props={{ "class":"spacing -p-b-none" }}>
    <h1 class="text -headline -sans -uppercase">
        Nice to meet you, <br>I&rsquo;m Noureddine.
    </h1>
</PageHeader>

<Block props={{ "class":"general", "content": { "class":"spacing -mw-xl -gap-xl" } }}>
    <p class="text -xxl -justify" data-cursor="text">
        I&rsquo;ve spent the last two decades designing all kinds of <span class="text -sans -bold -xl -uppercase">great</span>, <span class="text -sans -bold -xl -uppercase">fun</span>, <span class="text -sans -bold -xl -uppercase">awful</span>, <span class="text -sans -bold -xl -uppercase">cute</span>, <span class="text -sans -bold -xl -uppercase">boring</span> and <span class="text -italic -push">(most importantly)</span> <span class="text -sans -bold -xl -uppercase">useful</span> things. In that time, tools changed, industries shifted and social media turned evil. The one constant is what I actually do <span class="mark -em">&mdash;</span> solve real problems.
    </p>
    <div class="columns -two spacing -gap-xxl">
        <div class="item spacing -gap-md">
            <p class="text -xl -justify" data-cursor="text">
                My design philosophy is simple: <span class="mark -highlight colour -bg -bg-accent-d-base text -contrast">don&rsquo;t make people&rsquo;s lives harder.</span> Whether I&rsquo;m designing for end users, leading a team, or choosing who to work for, underneath all of it is one thing <span class="mark -em">&mdash;</span> humans. Centre them in the work, focus on problems that matter to them, and don&rsquo;t help companies that make things worse.
            </p>
            <p class="text -xl -justify" data-cursor="text">
                Outside of design, I spend my time with my amazing wife and our beautiful, demon of a cat. I enjoy markets, lazy &ldquo;hikes&rdquo;, <span class="mark -crossed -a">cooking</span> bookmarking recipes, analogue objects, and I&rsquo;m currently <span class="text -italic -push">(very slowly)</span> building a video game.
            </p>
            <Image src="icon/star-01.svg" alt="" props={{"class":"florish -about colour -fill -fill-accent-a-light", "role":"presentation", "data-sticky-rotate": "250"}}/>
        </div>
        <div class="profile" data-cursor="👋🏽" data-cursor-attach="#hello" data-follow data-folow-axis-x data-follow-reach="0" data-follow-nudge="2" data-follow-tilt="5" data-follow-axis-x>
            <div class="-fg" data-follow data-follow-reach="0" data-follow-lerp=".05" data-follow-nudge="30">
                <Image src="photo/profile-fg@2x.png" alt="A film photograph of Noureddine from the waste up smiling while standing outdoors wearing a black beanie and a red rain coat." props={{"class":"-follow"}}/>
            </div>
            <Image src="photo/profile-bg@2x.png" alt="A film photograph of Noureddine from the waste up smiling while standing outdoors wearing a black beanie and a red rain coat." props={{"class":"-bg"}}/>
        </div>
    </div>
</Block>

<span class="cursor-attach -tag" id="hello">Hello!</span>