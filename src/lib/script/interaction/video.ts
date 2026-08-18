const togglePlayback = (video: HTMLElement) => {
    if (video && video.dataset.video) {
        const id: string = video.dataset.video;
        const media: HTMLVideoElement | null = video.querySelector(`video[data-video="${id}"]`);
        const cursorChange: HTMLElement | null = document.querySelector('div.cursor');

        if (media && cursorChange) {
            if (media.paused) {
                media.play().catch(() => {});
                video.dataset.cursor = 'playback-playing';
                cursorChange.dataset.state = 'playback-playing';
            } else {
                media.pause();
                video.dataset.cursor = 'playback-paused';
                cursorChange.dataset.state = 'playback-paused';
            }
        }
    }
};

export const vidControlInit = (): (() => void) => {
    const cleanups: (() => void)[] = [];
    const main = document.querySelector('main');
    const vids = main?.querySelectorAll<HTMLElement>('.vid-wrap');

    if (!vids || vids.length === 0) return () => {};

    vids.forEach((v) => {
        const onClick = () => togglePlayback(v);
        v.addEventListener('click', onClick);
        cleanups.push(() => v.removeEventListener('click', onClick));
    });

    return () => cleanups.forEach((fn) => fn());
};