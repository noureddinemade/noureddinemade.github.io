<script lang="ts">

    import Link from "$lib/component/action/Link.svelte";
    import Button from "$lib/component/action/Button.svelte";

    let ready = $state(false);

</script>

<div class={`cta${ready ? ' -ready' : ''}`}>

    <div class="item">
        <p class="text -serif -xl -regular -push">
            Ready to get in touch?
        </p>
    
        <Button props={{ "class":`-choice${ready ? ' -selected' : ''}`, "label":{"data-text":"Yes"}, onclick:() => ready = true }}/>
        <Button props={{ "class":`-choice${!ready ? ' -selected' : ''}`, "label":{"data-text":"No"}, onclick:() => ready = false }}/>
    </div>

    {#if (ready)}

        <div class="contact">
            <Link props={{ "class":"-mail text -serif -xl -regular", "href":"mailto:me@noureddine.biz", "label":{"data-text":"me@noureddine.biz"} }}/>
        </div>

    {:else}

        <div class="contact">
            <p class="text -serif -xl -regular">
                Keep exploring!
            </p>
        </div>
        
    {/if}

</div>