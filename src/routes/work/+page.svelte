<script lang="">

    import { transition, toggleTransitionIn, toggleTransitionOut } from "$lib/script/transition.js";

    import Block from "$lib/component/layout/Block.svelte";
    import PageHeader from "$lib/component/layout/PageHeader.svelte";
    import Button from "$lib/component/action/Button.svelte";
    import WorkIndex from "$lib/component/layout/WorkIndex.svelte";
    import RoleIndex from "$lib/component/layout/RoleIndex.svelte";
    
    let index = $state(false);

    export const snapshot = {
        capture: () => index,
        restore: (value) => index = value,
    };

</script>

<PageHeader props={{ "class":"spacing -p-b-lg", "content":{ "class":"spacing -mw-lg" } }}>
    <h1 class="text -headline -sans -uppercase">
        Here&rsquo;s a curated selection of my work from the last twenty years.
    </h1>
</PageHeader>

<div class={`btn-group -toggle${index ? ' -toggled' : ''} spacing -m-t-sm -m-b-xl`}>
    <Button props={{ "class":`-toggle ${index ? '' : '-on'}`, "label":{ "data-text":"Roles" }, onclick:() => index = false} } />
    <Button props={{ "class":`-toggle ${index ? '-on' : ''}`, "label":{ "data-text":"Index" }, onclick:() => index = true} } />
</div>

<Block props={{ "class":"work -on" }} noContent={true}>
    {#key index}
    <div class="content" in:transition={toggleTransitionIn} out:transition={toggleTransitionOut}>
        {#if index}
            <WorkIndex />
        {:else}
            <RoleIndex />
        {/if}
    </div>
    {/key}
</Block>

<!-- Floating Elements -->
<span class="cursor-attach -tag" id="readCaseStudy">Read Case Study</span>
<span class="cursor-attach -tag" id="dubName">Dubber</span>
<span class="cursor-attach -tag" id="sohName">Simple Online Healthcare</span>
<span class="cursor-attach -tag" id="sopName">Simple Online Pharmacy</span>
<span class="cursor-attach -tag" id="sodName">Simple Online Doctor</span>
<span class="cursor-attach -tag" id="kapName">Kapsel</span>
<span class="cursor-attach -tag" id="renuName">Renu</span>
<span class="cursor-attach -tag" id="echoName">Echo</span>
<span class="cursor-attach -tag" id="verName">StreetTeam / Verve</span>
<span class="cursor-attach -tag" id="gaName">General Assembly</span>
<span class="cursor-attach -tag" id="umgName">Universal Music</span>
<span class="cursor-attach -tag" id="nisName">Nissan</span>
<span class="cursor-attach -tag" id="toyName">Toyota</span>
<span class="cursor-attach -tag" id="bmwName">BMW</span>
<span class="cursor-attach -tag" id="vwName">Volkswagen</span>
<span class="cursor-attach -tag" id="wwName">Woolworths</span>
<span class="cursor-attach -tag" id="djName">David Jones</span>
<span class="cursor-attach -tag" id="nzabName">New Zealand All Blacks</span>