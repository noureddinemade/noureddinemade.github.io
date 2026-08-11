<script lang="ts">

    import type { LinkProps } from "$lib/script/types";

    let { props }: LinkProps = $props();

    const { label, ...link } = $derived(props);
    const windowAttrs = $derived(link['data-window'] ? { target: '_blank', rel: 'noopener noreferrer nofollow' } : {});
    const labelAttrs = $derived(label ? { ...label, class: label.class ? `label ${label.class}` : 'label' } : label);
    
</script>

<a {...link} {...windowAttrs}>
    <span {...labelAttrs}>
        {@html label['data-text']}
    </span>
</a>