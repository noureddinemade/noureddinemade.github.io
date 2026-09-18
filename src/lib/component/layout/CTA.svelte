<script lang="ts">

    import Link from "$lib/component/action/Link.svelte";
    import Button from "$lib/component/action/Button.svelte";

    let ready = $state(false);

</script>

<div class={`cta${ready ? ' -ready' : ''}`}>

    <p class="text -serif -xl -regular -push">
        Ready to get in touch?
    </p>

    <Button props={{ "class":`-choice${ready ? ' -selected' : ''}`, "label":{"data-text":"Yes"}, onclick:() => ready = true }}/>
    <Link props={{ "href":"/fitcheck", "class":"-choice", "label":{"data-text":"No"}, onclick:() => ready = false }}/>

    <div class={`contact${ready ? ' -on' : ''}`}>
        <Link props={{ "class":"-mail text -serif -xl -regular", "href":"mailto:me@noureddine.biz", "label":{"data-text":"me@noureddine.biz"} }}/>
    </div>

</div>