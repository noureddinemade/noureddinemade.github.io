<script lang="ts">

    import Tag from "$lib/component/data/Tag.svelte";

    let { tags, bg, align }: { tags: string[], bg?: string, align?: string } = $props();
    
</script>

<ul class={`tags ${align ? ' -'+align : ''}`}>
    {#each tags as t} <Tag tag={t} {bg} /> {/each}
</ul>