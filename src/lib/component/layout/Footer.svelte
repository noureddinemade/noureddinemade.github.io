<script lang="ts">

    import { onMount } from "svelte";
    import { year } from "$lib/data/glossary";
    import { marqueeInit } from "$lib/script/effect";
    
    import Image from "$lib/component/asset/Image.svelte";

    onMount(marqueeInit);
    
</script>

<footer class="global">
    <div class="item">
        <Image src="brand/smilies-01.svg" alt="" props={{ "class":"svg-img", "role":"presentation" }} />
        <div data-marquee>
            <div class="-on" data-marquee-track>
                <p class="text -lg -serif">A human made this. A human with lived experience. A human with empathy. A human who values craft.</p>
            </div>
        </div>
        <p class="text -sans -uppercase -sm">&copy; {year} &mdash; Noureddine Azhar</p>
    </div>
</footer>