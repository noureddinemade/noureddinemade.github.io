<script lang="ts">

    import { randomAccent } from "$lib/script/helpers";

    let { tag, bg }: {tag: string, bg?: string} = $props();

    const accent = $derived(bg ? bg : randomAccent());

</script>

<li class={`tag colour -misc-${accent}`}>{tag}</li>