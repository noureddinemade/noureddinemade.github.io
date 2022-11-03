// Home

const cases     = document.querySelectorAll('ul.cases li');
const body      = document.querySelector('body');

//

const changeBG  = function (bg) {
    
    body.style.backgroundColor = bg;

}

//

cases.forEach( c => {

    const currentBG = window.getComputedStyle(body).getPropertyValue('background-color');
    const a         = c.querySelector('a.navLink');

    a.addEventListener('mouseover', () => { changeBG(`#${c.dataset.bg}`) })


    a.addEventListener('mouseout', () => { changeBG(currentBG) })

})