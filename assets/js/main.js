// Main

const videoThumb    = document.querySelector('.heyEveryone');
const videoToggle   = document.querySelector('#toggleVideo');
const videoSection  = document.querySelector('#video');

let offset          = [0,0];
let dragging        = false;

// Drag me around weeeee

videoThumb.addEventListener('mousedown', (e) => {

    dragging    = true;
    offset      = [ videoThumb.offsetLeft - e.clientX, videoThumb.offsetTop - e.clientY,];

}, true);

document.addEventListener('mouseup', () => { dragging = false }, true);

document.addEventListener('mousemove', (e) => {

    e.preventDefault();

    if (dragging) {

        videoThumb.style.left = (e.clientX + offset[0]) + 'px';
        videoThumb.style.top  = (e.clientY + offset[1]) + 'px';

    }

}, true);

// Video Toggle

if (videoToggle != null && videoSection != null) {

    videoToggle.addEventListener('click', (e) => {

        e.preventDefault();

        videoSection.classList.contains('open')
        ? videoSection.classList.remove('open')
        : videoSection.classList.add('open')

    })
    
}