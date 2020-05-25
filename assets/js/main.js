// Variables

const allLinks          = document.querySelectorAll('a.link');

const cursor            = document.querySelector('.cursor');
const cursorType        = cursor.querySelector('svg use');

let egg;

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

        cursor.classList.remove('pointer');
        cursorType.setAttribute('xlink:href', '#cursorNormal');

    });

});

// The shit is chess

if (document.querySelector('span.trainingDay')) {

    const alonso = document.querySelector('a.trainingDay');
    const harris = document.querySelector('span.trainingDay');

    alonso.addEventListener('mouseover', () => {

        harris.style.display = 'block';
        cursor.querySelector('svg').style.display = 'none';

    });

    alonso.addEventListener('mouseout', () => {

        harris.style.display = 'none';
        cursor.querySelector('svg').style.display = 'block';

    });

}