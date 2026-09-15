<script lang="">

    import Block from "$lib/component/layout/Block.svelte";
    import PageHeader from "$lib/component/layout/PageHeader.svelte";
    import Button from "$lib/component/action/Button.svelte";
    import Tags from "$lib/component/data/Tags.svelte";

    let me = $state(true);

</script>

<PageHeader props={{ "class":"spacing -p-b-lg", "content":{ "class":"spacing -mw-lg" } }}>
    <h1 class="text -headline -sans -uppercase">
        Let&rsquo;s make sure we&rsquo;re on the same page.
    </h1>
</PageHeader>

<Block props={{ "class":"work -on" }}>
    <p class="text -xxl">
        I&rsquo;m interested in working on things that make a positive impact with decent people who aren&rsquo;t dickheads <span class="mark -em">&mdash;</span> if that sounds good, let&rsquo;s have a chat.
    </p>
    <div class="columns -two spacing -gap-xl">
        <p class="text -xl -justify">
            You offer: <span class="text -sans -uppercase -lg -bold">ownership</span> and creative freedom to solve problems, <span class="text -sans -uppercase -lg -bold">flexibility</span> to deliver good work, not sit in an office from 9 to 5, a <span class="text -sans -uppercase -lg -bold">diverse</span> environment <span class="text -italic -push -subtle">(which includes leadership)</span>, and a <span class="text -sans -uppercase -lg -bold">competitive</span> salary.
        </p>
        <p class="text -xl -justify">
            I bring: <span class="text -sans -uppercase -lg -bold">hands-on</span> design leadership, <span class="text -sans -uppercase -lg -bold">honesty</span> that&rsquo;s direct and respectful, deliberate <span class="text -sans -uppercase -lg -bold">collaboration</span> that centres the people it&rsquo;s for, and <span class="text -sans -uppercase -lg -bold">two decades</span> of multidisciplinary design experience.
        </p>
    </div>
    <div class="columns -two spacing -gap-xl">
        <div class="item layout -f-a-center spacing -gap-sm">
            <h2 class="text -sans -uppercase -bold -xl">
                I&rsquo;m not interested in:
            </h2>
            <Tags tags={['Generative AI', 'Gambling', 'Crypto', 'Finance']} bg='accent-b-dark -text -text-accent-b-dark text -lg -serif -regular'/>
        </div>
        <div class="item layout -f-a-center spacing -gap-sm">
            <h2 class="text -sans -uppercase -bold -xl">
                Areas I&rsquo;d love to explore:
            </h2>
            <Tags tags={['Education', 'Healthcare', 'Zero AI Products']} bg='accent-a-dark -text -text-accent-a-dark text -lg -serif -regular'/>
        </div>
    </div>
</Block>
