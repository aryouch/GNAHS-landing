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
        seccionFiltro.style.top = headerHeight + "px"; 
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

        // quitar animación a todos los spans dentro
        el.querySelectorAll('span').forEach(s => s.classList.remove('animate-slide'));

        // quitar animación al h3 solo si existe
        const h3 = el.querySelector('h3');
        if(h3) {
            h3.classList.remove('animate-slide-left');
        }
        // quitar animación al p solo si existe
        const p = el.querySelector('p');
        if(p) {
            p.classList.remove('animate-slide-right');
        }
        // quitar animación al a solo si existe
        const a = el.querySelector('a');
        if(a) {
            a.classList.remove('animate-slide-left');
        }
    });

    // Mostrar solo los elementos que coinciden con el selector
    const elementos = document.querySelectorAll(selector);
    elementos.forEach(el => {
        el.style.display = 'block';

        // Animar cada span dentro de este bloque
        let spans = el.querySelectorAll('span');
        let h3 = el.querySelector('h3');
        let p = el.querySelector('p');
        let a = el.querySelector('a');

        spans.forEach(s => {
            s.classList.remove('animate-slide'); // quitar clase
            void s.offsetWidth;                 // forzar reflow
            s.classList.add('animate-slide');   // agregar clase de animación
        });

        // Animar el h3 si existe
        if(h3) {
            void h3.offsetWidth;
            h3.classList.add('animate-slide-left');
        }
        // Animar el p si existe
        if(p) {
            void p.offsetWidth;
            p.classList.add('animate-slide-right');
        }
        // Animar el a si existe
        if(a) {
            a.classList.remove('animate-slide-left');
            void a.offsetWidth;
            a.classList.add('animate-slide-left');
        }
    });
}



// Mostrar toido sin filtros
function mostrarTodos() {
    filtros.forEach(el => {
        el.style.display = 'block';
        el.classList.remove('animate-slide');
        void el.offsetWidth; // void sirve para  forzar reflow // refloow es una recalculación del estilo y diseño de un elemento en la página web.
        el.classList.add('animate-slide');
    });
}
