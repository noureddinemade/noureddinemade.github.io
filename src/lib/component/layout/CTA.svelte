<script lang="ts">

    import Link from "$lib/component/action/Link.svelte";

</script>

<div class="cta">

    <p class="text -serif -xl -regular">
        If you like what <Link props={{ "href":"/work", "label":{"data-text":"my process and what I can do"} }}/>, and you can <Link props={{ "href":"/fitcheck", "label":{"data-text":"offer what I&rsquo;m looking for"} }}/>, I think we might be a good fit. 
    </p>

    <Link props={{ "class":"-mail text -serif -xl -regular", "href":"mailto:me@noureddine.biz", "label":{"data-text":"me@noureddine.biz"} }}/>

</div>