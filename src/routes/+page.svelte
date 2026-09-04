<script lang="ts">

    import Block from "$lib/component/layout/Block.svelte";
    import Emoji from "$lib/component/asset/Emoji.svelte";
    import Link from "$lib/component/action/Link.svelte";

</script>

<Block props={{ "class":"home", "content":{ "class":"spacing -gap-xxl" } }}>
    <h1 class="text -xxxl -serif spacing -mw-xl">
        Hello <span class="text -italic -push">internet friends</span>, I&rsquo;m <span class="mark -underline -b colour -fill -fill-accent-b-base" data-cursor-attach="#noureddine" data-cursor="🌞">Noureddine</span> <span class="mark -em -lg">&mdash;</span> a <span class="text -italic">(hands-on)</span> design leader with two decades of <Link props={{ "href":"work", "label":{"data-text":"experience"} }} />. Currently I&rsquo;m open to working on things with decent humans, let&rsquo; see if <Link props={{ "href":"fitcheck", "label":{"data-text":"we&rsquo;re a good fit"} }}/>.
    </h1>
</Block>

<!-- a desire to do some good and an <Emoji emoji="🫏" text="ass"/> that just won&rsquo;t quit. -->