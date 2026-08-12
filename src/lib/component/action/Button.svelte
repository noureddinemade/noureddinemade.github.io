<script lang="ts">

    import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';
    import type { ButtonProps } from "$lib/script/types";

    let { props }: ButtonProps = $props();

    const { label, ...button } = $derived(props);

    const labelAttrs: HTMLAttributes<HTMLElement> = $derived({ ...label, class: label.class ? `label ${label.class}` : 'label' });
    const buttonAttrs: HTMLButtonAttributes = $derived({ ...button, class: button.class ? `btn ${button.class}` : 'btn' });
    
</script>

<button {...buttonAttrs}>
    <span {...labelAttrs}>
        {@html labelAttrs['data-text']}
    </span>
</button>