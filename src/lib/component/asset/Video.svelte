<script lang="ts">
    import type { VideoProps } from "$lib/script/types";

    let { vid, props }: VideoProps = $props();

    const vidID = $derived.by(() => {

        let vidType = vid.replaceAll('/', '');
            vidType = vidType.replaceAll('.mp4', '');
        
            return vidType;

    });

    const videos = import.meta.glob<string>('/src/lib/asset/**/*.mp4', {
        import: 'default',
        eager: true
    });
    
    const posters = import.meta.glob<string>('/src/lib/asset/**/*', {
        import: 'default',
        eager: true
    });

    const video = $derived.by(() => {
        const vidPath = `/src/lib/asset/${vid}`;
        const vidPool = videos;
        const raw = vidPool[vidPath];

        return raw;
    });
    
    const posterImage = $derived.by(() => {
        let img;
        if (props && props.poster) {
    
            const posterPath = `/src/lib/asset/${props.poster}`;
            const posterPool = posters;
            img = posterPool[posterPath];

        } else { img = ''; }

        return img;
    });

    const vidProps = $derived(
        props
            ? { ...props, class: props.class ? `video-wrap ${props.class}` : 'video-wrap' }
            : { class: 'video-wrap' }
    );
</script>

<!-- <div {...vidProps} data-cursor=`playback${ playback && playback.a ? '-paused' : '-playing' }` data-video={vidID}> -->
<div id={vidProps.id} class={vidProps.class} data-video={vidID}>
<video 
        data-video={vidID}
        autoplay={ props && props.autoplay ? true : false }
        muted={ props && props.muted ? true : false }
        loop={ props && props.loop ? true : false }
        playsinline
        preload="metadata"
        aria-label={props?.["aria-label"]}
        poster={posterImage}
    >
        <source src={video} type="video/mp4">
    </video>
</div>