<script lang="ts">

    import Block from "$lib/component/layout/Block.svelte";
    import Logo from "$lib/component/asset/Logo.svelte";
    import Tags from "$lib/component/data/Tags.svelte";
    import Link from "$lib/component/action/Link.svelte";

</script>

<Block props={{ "class":"lite" }}>
    <Logo lite={true} />
    <div class="item layout -f-a-center spacing -gap-md -m-b-lg">
        <h1 class="text -xxl -sans -uppercase">
            Hello internet friends.
        </h1>
        <p class="text -serif -xl -regular">
            I&rsquo;m Noureddine <span class="mark -em -lg">&mdash;</span> a <span class="text -italic -subtle">(hands-on)</span> design leader who brings: <span class="text -sans -uppercase -lg -bold">hands-on</span> design leadership, <span class="text -sans -uppercase -lg -bold">honesty</span> that&rsquo;s direct and respectful, deliberate <span class="text -sans -uppercase -lg -bold">collaboration</span> that centres the people it&rsquo;s for, and <span class="text -sans -uppercase -lg -bold">two decades</span> of multidisciplinary design experience.
        </p>
        <p class="text -serif -xl -regular">
            If you offer: <span class="text -sans -uppercase -lg -bold">ownership</span> and creative freedom to solve problems, <span class="text -sans -uppercase -lg -bold">flexibility</span> to deliver good work, not sit in an office from 9 to 5, a <span class="text -sans -uppercase -lg -bold">diverse</span> environment <span class="text -italic -push -subtle">(which includes leadership)</span>, and a <span class="text -sans -uppercase -lg -bold">competitive</span> salary <span class="mark -em -lg">&mdash;</span> I think we should have a chat!
        </p>
    </div>
    <div class="item layout -f-a-center spacing -gap-md -m-b-lg">
        <h2 class="text -xl -sans -uppercase">
            What can I help with?
        </h2>
        <Tags align="center" tags={['End-to-end Design', 'Zero-to-one Design', 'Design Systems', 'Design Strategy and Leadership', 'Product Focused Branding']} bg='accent-a-dark -text -text-accent-a-dark text -lg -serif -regular'/>
    </div>
    <div class="item layout -f-a-center spacing -gap-md">
        <h2 class="text -xl -sans -uppercase">
            Ready to get in touch?
        </h2>
        <p class="text -serif -xl -regular">
            If you&rsquo;d like to view my full portfolio, please use a larger screen. Otherwise, feel free to shoot me an email: <Link props={{ "href":"mailto:me@noureddine.biz", "label":{"data-text":"me@noureddine.biz"}, "class":"" }}/>
        </p>
    </div>
    
</Block>