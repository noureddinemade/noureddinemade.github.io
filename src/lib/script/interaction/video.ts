// const togglePlayback = (video: HTMLVideoElement) => {

//     const id    = video.dataset.video;
//     const media = video.querySelector(`video[data-video="${id}"]`);
//     const cursorChange = document.querySelector('div.cursor');

//     if (media.paused) {
//         media.play();
//         video.dataset.cursor = 'playback-playing';
//         cursorChange.dataset.state = 'playback-playing';
//     } else {
//         media.pause();
//         video.dataset.cursor = 'playback-paused';
//         cursorChange.dataset.state = 'playback-paused';
//     }

// };

// if (flags.enabled && document.querySelector('main .video-wrap')) {

//     const main      = document.querySelector('main');
//     const videos    = main.querySelectorAll('.video-wrap');

//     if (videos) {

//         videos.forEach(v => {

//             v.addEventListener('click', () => togglePlayback(v));

//         });

//     }

// }