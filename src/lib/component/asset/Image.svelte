<script lang="ts">
    let { src, alt, desc=null, props, parent={} } = $props();

    const type = $derived(src.split('.').pop());

    const svgs = import.meta.glob('/src/lib/asset/**/*.svg', {
        query: '?raw',
        import: 'default',
        eager: true
    });

    const images = import.meta.glob('/src/lib/asset/**/*', {
        import: 'default',
        eager: true
    });

    const image = $derived.by(() => {
        const path = `/src/lib/asset/${src}`;
        const pool = type === 'svg' ? svgs : images;
        const raw = pool[path] ?? images['/src/lib/asset/general/unavailable.png'];

        if (type === 'svg' && props) {
            const attrs = Object.entries(props)
                .map(([key, value]) => `${key}="${value}"`)
                .join(' ');
            return raw.replace('<svg', `<svg ${attrs}`);
        }

        return raw;
    });

    const figureProps = $derived(
        props
            ? { ...props, class: props.class ? `img-wrap ${props.class}` : 'img-wrap' }
            : { class: 'img-wrap' }
    );
</script>
{#if type === 'svg'}
{#if (parent)}
        <span {...parent}>
            {@html image}
        </span>
    {:else}
        {@html image}
    {/if}
{:else if desc}
    <figure {...figureProps}>
        <img src={image} {alt} />
        <figcaption>{desc}</figcaption>
    </figure>
{:else}
    {#if (parent)}
        <span {...parent}>
            <img src={image} {alt} {...props} />
        </span>
    {:else}
        <img src={image} {alt} {...props} />
    {/if}
{/if}