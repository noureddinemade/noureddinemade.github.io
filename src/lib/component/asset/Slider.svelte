<script lang="ts">

    import { slider } from "$lib/script/interaction/slider";

    let { children, bg } = $props();

</script>

<div class={`img-slider colour -bg -bg-${bg}`} use:slider>
    {@render children()}
</div>