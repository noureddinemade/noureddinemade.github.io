//

const workItem              = document.querySelectorAll('section.work div.items div.item');
const workLink              = document.querySelectorAll('section.work div.items div.item a');

const pageMarks             = document.querySelectorAll('div.mark');


//

workLink.forEach(link => {

    link.addEventListener('mouseover', () => {

        workItem.forEach(link => link.style.opacity = '0');
        link.parentNode.style.opacity = '1';

    });

    link.addEventListener('mouseout', () => {

        workItem.forEach(link => link.style.opacity = '1');

    });

});

//
