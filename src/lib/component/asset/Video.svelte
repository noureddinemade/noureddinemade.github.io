<script lang="ts">

    import type { VideoProps } from "#lib/script/types.ts";

    let { vid, props }: VideoProps = $props();

    let paused = $state(true);

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
            ? { ...props, class: props.class ? `vid-wrap ${props.class}` : 'vid-wrap' }
            : { class: 'vid-wrap' }
    );

    // Initialise video
    function initVideo(el: HTMLVideoElement) {
        if (props?.muted) {
            el.defaultMuted = true;
            el.muted = true;
        }

        paused = el.paused;

        if (props?.autoplay) {
            el.play().catch(() => {});
        }
    }
    
</script>

<div id={vidProps.id} class={vidProps.class} data-video={vidID} data-cursor={paused ? 'playback-paused' : 'playback-playing'}>
    <video 
        data-video={vidID}
        autoplay={ props?.autoplay ?? false }
        muted={props?.muted ?? false}
        loop={ props?.loop ?? false }
        playsinline
        preload="metadata"
        aria-label={props?.["aria-label"]}
        poster={posterImage}
        use:initVideo
        onplay={ () => paused = false }
        onpause={ () => paused = true }
    >
        <source src={video} type="video/mp4">
    </video>
</div>