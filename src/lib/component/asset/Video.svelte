<script lang="ts">
    let { vid, props } = $props();

    const { aria, poster, playback , ...wrapper } = $derived(props);
    let vidID = vid.replaceAll('/', '');
        vidID = vidID.replaceAll('.mp4', '');

    const videos = import.meta.glob('/src/lib/asset/**/*.mp4', {
        import: 'default',
        eager: true
    });
    
    const posters = import.meta.glob('/src/lib/asset/**/*', {
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
        if (poster) {
    
            const posterPath = `/src/lib/asset/${poster}`;
            const posterPool = posters;
            img = posterPool[posterPath];

        } else { img = ''; }

        return img;
    });


    const vidProps = $derived(
        props
            ? { ...wrapper, class: props.class ? `video-wrap ${props.class}` : 'video-wrap' }
            : { class: 'video-wrap' }
    );
</script>

<!-- <div {...vidProps} data-cursor=`playback${ playback && playback.a ? '-paused' : '-playing' }` data-video={vidID}> -->
<div {...vidProps} data-video={vidID}>
<video 
        data-video={vidID}
        autoplay={ playback && playback.a ? false : true }
        loop={ playback && playback.l ? false : true }
        muted={ playback && playback.m ? false : true }
        playsinline
        preload="metadata"
        aria-label={aria}
        poster={posterImage}
    >
        <source src={video} type="video/mp4">
    </video>
</div>