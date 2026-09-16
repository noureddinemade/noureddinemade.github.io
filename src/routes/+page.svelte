<script lang="ts">

    import Block from "$lib/component/layout/Block.svelte";
    import Link from "$lib/component/action/Link.svelte";

</script>

<Block props={{ "class":"home", "content":{ "class":"spacing -gap-xxl" } }}>
    <h1 class="text -xxxl -serif spacing -mw-xl">
        Hello <span class="text -italic -push">internet friends</span>, I&rsquo;m <span class="mark -underline -b colour -fill -fill-accent-b-base" data-cursor-attach="#noureddine" data-cursor="🌞">Noureddine</span> <span class="mark -em -lg">&mdash;</span> a <span class="text -italic -subtle">(hands-on)</span> design leader with two decades of multidisciplinary design <Link props={{ "href":"work", "label":{"data-text":"experience"} }} /> who enjoys working on useful things, alongside decent people.
    </h1>
</Block>