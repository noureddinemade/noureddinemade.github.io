//

const workLinks = document.querySelectorAll('.work div.item a');

//

workLinks.forEach(link => {

    let linkParent = link.parentNode;

    link.addEventListener('mouseover', () => {

        workLinks.forEach(item => {

            item.parentNode.style.opacity = '0';

        });

        linkParent.style.opacity = '1';

    });

    link.addEventListener('mouseout', () => {

        workLinks.forEach(item => {

            item.parentNode.style.opacity = '1';

        });

    });

});