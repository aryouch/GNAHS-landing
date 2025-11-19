const logo = document.getElementById('logo');
const menu = document.getElementById('menu');
const filtrarSelect = document.querySelector('.select-custom'); 
const filtros = document.querySelectorAll('.filtrotecnologia, .filtoremarqueting');

//  header fijo
scrollheader();

// seccion seccionfiltro fija al hacer scroll
scrollFiltro();


function scrollheader() {
    window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        menu.classList.add('scrolled');
        changeMenu(true);
    } else {
        menu.classList.remove('scrolled');
        changeMenu(false);
    }
});
}

function scrollFiltro() {
    window.addEventListener('scroll', () => {
    const seccionFiltro = document.querySelector('.seccionfiltro');
    const header = document.getElementById('menu');

    // altura del header al hacer scroll
    const headerHeight = header.offsetHeight;

    if (window.scrollY >= 1350) {
        seccionFiltro.classList.add('sticky', 'left-0', 'right-0', 'z-30', 'shadow-lg');
        seccionFiltro.style.top = headerHeight + "px"; // 👈 evita que se monte encima del header
    } else {
        seccionFiltro.classList.remove('fixed', 'left-0', 'right-0', 'z-30', 'shadow-lg');
        seccionFiltro.style.top = "";
    }
});
}

function changeMenu(isScrolled) {
    if (isScrolled) {
        logo.src = 'imagenes/logoenblanco.png'; 
    } else {
        logo.src = 'imagenes/logonav.png'; 
    }
}

filtrarSelect.addEventListener('change', (e) => {
    // Obtener la categoría seleccionada

    const categoria = e.target.value;
    console.log("Has seleccionado la categoría: " + e.target.value);

    switch (categoria) {
        case 'tecnologia':
            mostrarSolo('.filtrotecnologia');
            break;

        case 'marqueting':
            mostrarSolo('.filtoremarqueting');
            break;

        default:
            mostrarTodos();
    }
});

function mostrarSolo(selector) {
   
    // Ocultar todos los elementos primero
    filtros.forEach(el => {
        el.style.display = 'none';

    });
    // Mostrar solo los elementos que coinciden con el selector
    document.querySelectorAll(selector).forEach(el => {
        el.style.display = 'block';
    });
}

// Mostrar toido sin filtros
function mostrarTodos() {
    filtros.forEach(el=>{
        el.style.display = 'block'; 

    });
}
