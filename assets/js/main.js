// Variables

const allLinks          = document.querySelectorAll('a');

const cursor            = document.querySelector('.cursor');
const cursorType        = cursor.querySelector('svg use');

// Functions

const moveCursor = (x,y) => {

    cursor.style.left   = x + 'px';
    cursor.style.top    = y + 'px';

};

// Cursor fun stuff

document.addEventListener('mousemove', (e) => {

    moveCursor(e.pageX, e.pageY);

});

allLinks.forEach(link => {

    link.addEventListener('mouseover', () => {

        cursor.classList.add('pointer');
        cursorType.setAttribute('xlink:href', '#cursorPointer');

        link.addEventListener('mousedown', () => {

            cursor.classList.remove('pointer');
            cursor.classList.add('clicked');
            cursorType.setAttribute('xlink:href', '#cursorClicked');

        });

        link.addEventListener('mouseup', () => {

            cursor.classList.remove('clicked');
            cursorType.setAttribute('xlink:href', '#cursorPointer');

        });

    });

    link.addEventListener('mouseout', () => {

        cursor.classList.remove('pointer');
        cursorType.setAttribute('xlink:href', '#cursorNormal');

    });

});