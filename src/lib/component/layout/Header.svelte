<script lang="ts">
    import Nav from "$lib/component/layout/Nav.svelte";
    import Link from "$lib/component/action/Link.svelte";
    import Video from "$lib/component/asset/Video.svelte";
    import { pages } from "$lib/data/glossary";

    let { current }: { current: string; } = $props();

</script>

<header class="global">

    <div class="group">
        <div class="block -noureddine" data-cursor-attach="#noureddine" data-cursor="noureddine" data-lerp={0.02}>
            <p>☻ The Online Portfolio <span class="text -italic -push">of</span> Noureddine Azhar</p>
        </div>
        <Nav {current} />
        <div class="block -location" data-cursor="📍" data-cursor-attach="#naarm" data-lerp={0.02}>
            <p>Naarm <span class="text -italic">(Melbourne)</span></p>
        </div>
        <div class="block -logo" data-cursor="💰" aria-hidden="true"><div class="logo"></div><p>نورالدين</p></div>
    </div>

    <div class="group">
        <div class="block -services" data-cursor="design">
            <p>Product, Digital <span class="text -italic -push">and</span> Brand ✎</p>
        </div>
        <div class="block colour -bg -bg-accent-a-dark text -contrast" data-marquee>
            <div data-marquee-track>
                <p>Currently open to working on new things 💈</p>
            </div>
        </div>
        <Link props={{
            "href": pages.filter(p => p.title === 'Fitcheck')[0].title,
            "class": 'colour -bg -bg-accent-b-dark -hover -hover-accent-b-base text -contrast',
            "label": { 'data-text': 'Are we a good fit?' }
        }} />
    </div>

    <!-- Floating Elements -->
    <Video 
        vid="vid/noureddine.mp4"
        props={{ 
            "aria-label":"A timelapse of Noureddine through the years.",
            "class":"cursor-attach -noureddine",
            "id":"noureddine"
    }}/>
    
    <span class="cursor-attach -always-was" id="naarm"></span>

</header>