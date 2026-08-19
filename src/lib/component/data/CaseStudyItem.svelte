<script lang="ts">

    import Link from "$lib/component/action/Link.svelte";

    let { title, href } = $props();

</script>

<li class="item -case-study">

    <Link props={{ "href":href, "label":{ "data-text":title }, "class":"-case-study-item" }}/>

</li>