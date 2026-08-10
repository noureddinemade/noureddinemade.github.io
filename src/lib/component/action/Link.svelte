<script>

    let { props } = $props();

    const { label, newWindow, ...link } = $derived(props);

    const windowAttrs = $derived(
        newWindow ? { target: '_blank', rel: 'noopener noreferrer nofollow' } : {}
    );

    const labelAttrs = $derived(
        label
            ? { ...label, class: label.class ? `label ${label.class}` : 'label' }
            : label
    );
    
</script>

<a {...link} {...windowAttrs}>
    <span {...labelAttrs}>
        {@html labelAttrs['data-text']}
    </span>
</a>