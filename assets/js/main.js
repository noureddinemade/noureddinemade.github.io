//

let mouseStill;

const links                 = document.querySelectorAll('a');

const pageMarks             = document.querySelectorAll('div.mark');

const cursor                = document.querySelector('.cursor');

const copyrightYear         = document.querySelector('.copyrightYear');

//

const cursorMove = (x,y) => {

    cursor.style.top        = y + 'px';
    cursor.style.left       = x + 'px';
}

const isMouseMoving = function() {

    clearInterval(mouseStill);

    if (!cursor.classList.contains('rock')) {

        mouseStill = setInterval(() => {

            cursor.classList.add('rock');

        }, 5000);

    }

}

//

document.addEventListener('mousemove', e => {

    cursorMove(e.pageX, e.pageY);

    cursor.classList.remove('rock');

    isMouseMoving();

});

links.forEach(link => {

    link.addEventListener('mouseover', () => {

        cursor.classList.add('link');

    });

    link.addEventListener('mouseout', () => {

        cursor.classList.remove('link');

    });

});