// Main

const videoThumb    = document.querySelector('.heyEveryone');

let offset          = [0,0];
let dragging        = false;

//

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