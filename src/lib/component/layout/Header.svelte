<script lang="ts">

    import type { Page, Case } from "$lib/script/types";

    import { tick } from "svelte";
    import { onNavigate } from "$app/navigation";
    
    import { getCaseIndex, isCase, getMetaByPath } from "$lib/script/helpers";
    import { marqueeInit } from "$lib/script/effect";
    import { transitionOn } from "$lib/script/transition";
    
    import Nav from "$lib/component/layout/Nav.svelte";
    import SubNav from "$lib/component/layout/SubNav.svelte";
    import Link from "$lib/component/action/Link.svelte";
    import Video from "$lib/component/asset/Video.svelte";
    import Button from "$lib/component//action/Button.svelte";

    let { current }: { current: Page | Case | null } = $props();

    const currentCaseIndex = $derived(current && isCase(current) ? getCaseIndex(current.id) : 0);

    let menu = $state(false);

    onNavigate(() => new Promise((resolve) => {
        menu = false;
        resolve();
    }));
    
    $effect(() => {
        current;                          // depend on current — re-run when it changes
        tick().then(marqueeInit);         // rebuild after the DOM swap settles
    });
    
</script>

<header class={`global -on${menu ? ' -menu-open' : ''}`} {@attach transitionOn((path: string) => { const m = getMetaByPath(path); return m && isCase(m) ? 'case' : 'default'; })}>

    {#if (current && isCase(current))}

        <div class="group -bottom -single">
            <Link props={{
                "href": '/work/',
                "class": '-prev colour -bg -bg-accent-c-base -hover -hover-accent-c-dark text -contrast',
                "label": { 'data-text': 'Back to Work' }
            }} />
            <div class={`block colour -bg -bg-accent-${current.accent} text -contrast`} data-marquee >
                <div class="-on" data-marquee-track {@attach transitionOn((path: string) => getMetaByPath(path)?.title ?? '')}>
                    <p>{current.icon} {@html current.title}</p>
                </div>
            </div>
            <SubNav current={currentCaseIndex} />
        </div>
        
    {:else}    
        
        <div class="group -top">
            <div class="block -location" data-cursor="📍" data-cursor-attach="#naarm" data-lerp={0.02}>
                <p>Naarm <span class="text -italic">(Melbourne)</span></p>
            </div>
            <div class="block -logo" data-cursor="💰" aria-hidden="true"><div class="logo"></div><p>نورالدين</p></div>
            <div class="block -noureddine" data-cursor-attach="#noureddine" data-cursor="🌞" data-lerp={0.02}>
                <p class="hide-on-mobile">☻ The Online Portfolio <span class="text -italic -push">of</span> Noureddine Azhar</p>
                <p class="show-on-mobile">Noureddine Azhar</p>
            </div>
            <div class="block -services" data-cursor="design">
                <p>Product, Digital <span class="text -italic -push">and</span> Brand ✎</p>
            </div>
        </div>

        <div class="group -bottom">
            
            <div class="block colour -bg -bg-accent-a-dark text -contrast" data-marquee>
                <div class="-on" data-marquee-track>
                    <p>Currently open to working on new things 💈</p>
                </div>
            </div>
            <Nav current={current ? current.id : ''} />
            <Link props={{
                "href": "fitcheck",
                "class": "-fitcheck",
                "label": { "data-text": "Are we a good fit?" }
            }} />
        </div>

    {/if}

    <Button props={{ "class":"-main-menu", "id":"menuToggle", "label":{"data-text":menu ? 'Close' : 'Menu'}, onclick:() => menu = !menu }}/>

    <!-- Floating Elements -->
    <Video 
        vid="vid/noureddine.mp4"
        props={{ 
            "aria-label":"A timelapse of Noureddine through the years.",
            "class":"cursor-attach -noureddine",
            "id":"noureddine",
            "autoplay":true,
            "loop":true,
            "muted":true
    }}/>
    
    <span class="cursor-attach -always-was" id="naarm"></span>

</header>