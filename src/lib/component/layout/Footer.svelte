<script>
    import Image from "$lib/component/dynamic/Image.svelte";
    import { year } from "$lib/data/glossary";
</script>

<footer class="global">
    <div class="item" data-cursor="no-ai">
        <Image src="brand/smilies-01.svg" alt="" props={{ "class":"svg-img", "role":"presentation" }} />
        <p class="text -lg"><span class="serif">A human made this.</span></p>
        <p class="text -sans -uppercase -sm">&copy; {year} &mdash; Noureddine Azhar</p>
    </div>
</footer>