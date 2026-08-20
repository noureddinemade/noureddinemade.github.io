<script lang="ts">

    import Tag from "$lib/component/data/Tag.svelte";

    let { tags }: { tags: string[] } = $props();
    
</script>

<ul class="tags">
    {#each tags as t} <Tag tag={t} /> {/each}
</ul>