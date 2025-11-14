const logo = document.getElementById('logo');
const menu = document.getElementById('menu');

window.addEventListener('scroll', () => {

    if (window.scrollY >= 50) {
        menu.classList.add('scrolled');
        changeMenu(true);
    } else {
        menu.classList.remove('scrolled');
        changeMenu(false);
    }
});

function changeMenu(isScrolled) {
    if (isScrolled) {
        logo.src = 'imagenes/logonavblaco.png'; 
    } else {
        logo.src = 'imagenes/logonav.png'; 
    }
}
