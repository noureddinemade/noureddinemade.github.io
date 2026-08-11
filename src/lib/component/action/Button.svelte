<script lang="ts">

    let { props } = $props();

    const { label, ...button } = $derived(props);

    const labelAttrs = $derived(
        label
            ? { ...label, class: label.class ? `label ${label.class}` : 'label' }
            : label
    );

    const buttonAttrs = $derived(
        button
            ? { ...button, class: button.class ? `btn ${button.class}` : 'btn' }
            : button
    );
    
</script>

<button {...buttonAttrs}>
    <span {...labelAttrs}>
        {@html labelAttrs['data-text']}
    </span>
</button>