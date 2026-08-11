<script lang="ts">
    import type { BlockProps } from "$lib/script/types";
    
    let { props = {}, children, beforeContent, afterContent }: BlockProps = $props();

    const { content, ...sectionProps } = $derived(props);

    const contentProps = $derived({
        ...content,
        class: content?.class ? `content ${content.class}` : 'content',
    });

</script>

<section {...sectionProps}>

    {@render beforeContent?.()}
    
    <div {...contentProps}>
        {@render children?.()}
    </div>

    {@render afterContent?.()}

</section>