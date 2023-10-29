
const openMenu = function () {

    const menu = document.getElementById("vertical-menu");
    menu.style.display = "block";

    const container = document.getElementById('container');
    container.style.filter = "brightness(50%)";
}

const closeMenu = function () {
    
    const menu = document.getElementById("vertical-menu");
    menu.style.display = "none";

    const container = document.getElementById('container');
    container.style.filter = "brightness(100%)";
}

const toggleMenu = function (elementId) {

    const itemMenu = document.getElementById(elementId);
    const imgSource = document.getElementById(`img-${elementId}-arrow`);

    if(itemMenu.style.display === null || itemMenu.style.display === '' )  itemMenu.style.display = 'none'

    const isNoneMenu = itemMenu.style.display === 'none';

    isNoneMenu ? itemMenu.style.display = 'block' : itemMenu.style.display = 'none';

    if(!isNoneMenu) {
        imgSource.src = "./images/icon-arrow-down.svg";
    } else {
        imgSource.src = "./images/icon-arrow-up.svg";
    }
}
