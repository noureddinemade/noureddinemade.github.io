<script lang="ts">

    import type { PageHeaderProps } from "$lib/script/types";
    
    import Block from "$lib/component/layout/Block.svelte";
    import Tags from "$lib/component/data/Tags.svelte";

    let { props={}, children }: PageHeaderProps = $props();

    const { tags, content, ...block } = $derived(props);

    const blockProps = $derived({
        ...block,
        class: block?.class ? `page-header ${block.class}` : "page-header",
    });

</script>

<Block props={{ "content":{...content}, ...blockProps }}>
    {@render children?.()}
    {#if (tags && tags.length > 0)}<Tags {tags} />{/if}
</Block>