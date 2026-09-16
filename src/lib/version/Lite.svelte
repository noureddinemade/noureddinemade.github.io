<script lang="ts">

    import Block from "$lib/component/layout/Block.svelte";
    import Logo from "$lib/component/asset/Logo.svelte";

</script>

<Block props={{ "class":"lite" }}>
    <Logo lite={true} />
    <p class="text -serif -xl -regular">
        Hello <span class="text -italic -push">internet friends</span>, I&rsquo;m Noureddine <span class="mark -em -lg">&mdash;</span> a <span class="text -italic -subtle">(hands-on)</span> design leader with two decades of multidisciplinary design experience who enjoys working on useful things, alongside decent people.
    </p>
    <p class="text -serif -xl -regular">
        If you&rsquo;d like to view my full portfolio, please use a larger screen.
    </p>
</Block>