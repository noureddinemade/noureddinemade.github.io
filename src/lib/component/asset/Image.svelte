<script lang="ts">

    import type { HTMLAttributes, HTMLImgAttributes } from "svelte/elements";
    import type { ImageProps } from "$lib/script/types";

    let { src, alt, desc, props, parent }: ImageProps = $props();

    const type = $derived(src.split('.').pop());

    const svgs = import.meta.glob<string>('/src/lib/asset/**/*.svg', {
        query: '?raw',
        import: 'default',
        eager: true
    });

    const images = import.meta.glob<string>('/src/lib/asset/**/*', {
        import: 'default',
        eager: true
    });

    const image = $derived.by(() => {
        const path = `/src/lib/asset/${src}`;
        const pool = type === 'svg' ? svgs : images;
        const raw = pool[path] ?? images['/src/lib/asset/general/blank.png'];

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
    <figure {...(figureProps as HTMLAttributes<HTMLElement>)}>
        <img src={image} {alt} />
        <figcaption>{desc}</figcaption>
    </figure>
{:else}
    {#if (parent)}
        <div {...parent}>
            <img src={image} {alt} {...(props as HTMLImgAttributes)} />
        </div>
    {:else}
        <img src={image} {alt} {...(props as HTMLImgAttributes)} />
    {/if}
{/if}