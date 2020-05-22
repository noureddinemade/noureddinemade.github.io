// Variables

const allLinks          = document.querySelectorAll('a');

const cursor            = document.querySelector('.cursor');
const cursorType        = cursor.querySelector('svg use');

// Functions

const moveCursor = (x,y,m) => {

    m.style.left   = x + 'px';
    m.style.top    = y + 'px';

};

// Cursor fun stuff

document.addEventListener('mousemove', (e) => {

    moveCursor(e.pageX, e.pageY, cursor);

});

allLinks.forEach(link => {

    link.addEventListener('mouseover', (e) => {

        if (link.classList.contains('trainingDay')) {

            document.querySelector('span.trainingDay').style.opacity = '1';

            moveCursor(e.pageX, e.pageY, document.querySelector('span.trainingDay'));

        }

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

    link.addEventListener('mouseout', (e) => {

        if (link.classList.contains('trainingDay')) {

            document.querySelector('span.trainingDay').style.opacity = '0';

        }

        cursor.classList.remove('pointer');
        cursorType.setAttribute('xlink:href', '#cursorNormal');

    });

});