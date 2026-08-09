<script>
    import Block from "$lib/component/dynamic/Block.svelte";
    import Tags from "$lib/component/dynamic/Tags.svelte";

    let { props = {}, children } = $props();

    const { tags = [], content, ...block } = $derived(props);

    const blockProps = $derived({
        ...block,
        class: block?.class ? `page-header ${block.class}` : "page-header",
    });

</script>

<Block props={{ "content":{...content}, ...blockProps }}>
    {@render children?.()}
    {#if (tags.length > 0)}<Tags {tags} />{/if}
</Block>