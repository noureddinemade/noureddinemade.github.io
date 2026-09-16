<script lang="">

    import { transition, toggleTransitionIn, toggleTransitionOut } from "$lib/script/transition.js";

    import Block from "$lib/component/layout/Block.svelte";
    import PageHeader from "$lib/component/layout/PageHeader.svelte";
    import Button from "$lib/component/action/Button.svelte";
    import ViewYou from "$lib/component/layout/ViewYou.svelte";
    import ViewMe from "$lib/component/layout/ViewMe.svelte";
    import CTA from "$lib/component/layout/CTA.svelte";

    let you = $state(false);

</script>

<PageHeader props={{ "class":"spacing -p-b-lg", "content":{ "class":"spacing -mw-lg" } }}>
    <h1 class="text -headline -sans -uppercase">
        Let&rsquo;s make sure we&rsquo;re on the same page.
    </h1>
</PageHeader>


<Block props={{ "class":"work -on" }} noContent={true}>
    
    <p class="text -xxl spacing -mw-lg">
        I&rsquo;m interested in working on things that make a positive impact with decent people who aren&rsquo;t dickheads <span class="mark -em">&mdash;</span> if that sounds good, let&rsquo;s have a chat.
    </p>
    
    <div class={`btn-group -toggle${you ? ' -toggled' : ''} spacing -m-t-sm -m-b-lg`}>
        <Button props={{ "class":`-toggle ${you ? '' : '-on'}`, "label":{ "data-text":"Me" }, onclick:() => you = false} } />
        <Button props={{ "class":`-toggle ${you ? '-on' : ''}`, "label":{ "data-text":"You" }, onclick:() => you = true} } />
    </div>
    
    {#key you}
        <div class="content spacing -mw-lg" in:transition={toggleTransitionIn} out:transition={toggleTransitionOut}>
            {#if you}
                <ViewYou />
            {:else}
                <ViewMe />
            {/if}
        </div>
    {/key}

</Block>
