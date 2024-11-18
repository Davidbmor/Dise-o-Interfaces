 

const navBar = document.querySelector('.nav-bar');
const menu_on = document.querySelector('.menu-on');

if (navBar) {
    navBar.addEventListener('click', function() {
        navBar.classList.toggle('open');
        menu_on.classList.toggle('menu-mobile');
        
    });
}

