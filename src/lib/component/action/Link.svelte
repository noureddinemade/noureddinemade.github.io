<script lang="ts">

    import type { HTMLAttributes, HTMLAnchorAttributes } from 'svelte/elements';
    import type { LinkProps } from "$lib/script/types";

    let { props }: LinkProps = $props();

    const { label, ...link } = $derived(props);

    const windowAttrs: HTMLAnchorAttributes = $derived(link['data-window'] ? { target: '_blank', rel: 'noopener noreferrer nofollow' } : {});
    const labelAttrs: HTMLAttributes<HTMLElement> = $derived({ ...label, class: label.class ? `label ${label.class}` : 'label' });
    
</script>

<a {...link} {...windowAttrs}>
    <span {...labelAttrs}>
        {@html labelAttrs['data-text']}
    </span>
</a>