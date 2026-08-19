<script lang="ts">

    import type { BlockProps } from "$lib/script/types";
    import type { FadeParams, TransitionConfig } from "svelte/transition";
    import { fade, fly, slide, blur, scale, draw } from "svelte/transition";
    import { transitionSpeed } from "$lib/script/transition";

    let { props = {}, children, beforeContent, afterContent, transition = false }: BlockProps & { transition?: boolean } = $props();

    const { content, ...sectionProps } = $derived(props);

    const contentProps = $derived({
        ...content,
        class: content?.class ? `content ${content.class}` : 'content',
    });

    const fadeIn = (node: Element, params?: FadeParams): TransitionConfig =>
        transition ? blur(node, { duration: transitionSpeed, delay: transitionSpeed*1.5 }) : {};

    const fadeOut = (node: Element, params?: FadeParams): TransitionConfig =>
        transition ? blur(node, { duration: transitionSpeed }) : {};

</script>

<section {...sectionProps} in:fadeIn out:fadeOut>
    {@render beforeContent?.()}
    <div {...contentProps}>
        {@render children?.()}
    </div>
    {@render afterContent?.()}
</section>