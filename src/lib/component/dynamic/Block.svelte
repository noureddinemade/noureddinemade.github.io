<script>

    /**
        * @typedef {Object} Props
        * @property {{ content?: Record<string, any> } & Record<string, any>} [props]
        * @property {import('svelte').Snippet} [children]
        * @property {import('svelte').Snippet} [beforeContent]
        * @property {import('svelte').Snippet} [afterContent]
    */

    /** @type {Props} */
    let { props = {}, children, beforeContent, afterContent } = $props();

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