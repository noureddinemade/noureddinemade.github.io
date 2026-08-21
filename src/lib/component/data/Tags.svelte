<script lang="ts">

    import Tag from "$lib/component/data/Tag.svelte";

    let { tags, bg }: { tags: string[], bg?: string } = $props();
    
</script>

<ul class="tags">
    {#each tags as t} <Tag tag={t} {bg} /> {/each}
</ul>