// VARIABLES
const contenedorProducto = document.querySelector('.js-seccion1__contenedor-producto');
let contador = 0;

// EVENTOS
window.addEventListener('DOMContentLoaded', () => {
    cargarSeccion1();

    const ulBolitas = document.querySelector('.js-seccion1__ul');
    cargarBolitas(ulBolitas);

    //slider de imagen
    const btnFlecha = document.querySelector('.js-seccion1__flechas');
    btnFlecha.addEventListener('click', e => {
        const contenedorImagen = document.querySelector('.js-seccion1__img');
        const nombre = document.querySelector('.js-seccion1__nombre-h5');
        const imagen = contenedorImagen.children[0];
        if(e.target.classList.contains('fa-arrow-left-long')) {
            if(contador > 0) {
                limpiarHTML(nombre);
                contador--;
                moverImagen(contador, nombre, imagen);
                moverBolita(ulBolitas, contador, 'izquierda');
            }
        }
        if(e.target.classList.contains('fa-arrow-right-long')) {
            if(contador < botasColeccion.length - 1) {
                limpiarHTML(nombre);
                contador++;
                moverImagen(contador, nombre, imagen);
                moverBolita(ulBolitas, contador, 'derecha');
            }
        }
    });

    // boton formulario
    const btnEnviar = document.querySelector('.js-seccion5__form-boton');
    btnEnviar.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('soy el botón del formulario');
    })
})



// FUNCIONES
function cargarSeccion1 () {
    const producto = document.createElement('div');
    producto.classList.add('c-seccion1__producto');
    producto.innerHTML = `
        <div class="c-seccion1__producto-arriba"></div>
        <div class="c-seccion1__producto-abajo"></div>
        <div class="c-seccion1__nombre">
            <h5 class="c-seccion1__nombre-h5">Dynafit</h5>
            <h5 class="c-seccion1__nombre-h5 js-seccion1__nombre-h5">Mezzalama</h5>
            <div class="c-seccion1__nombre-raya"></div>
        </div>
        <div class="c-seccion1__img js-seccion1__img">
            <img src="build/img/nueva-coleccion/botas0.jpg" alt="imagen botas">
        </div>
        <div class="c-seccion1__listado">
            <ul class="c-seccion1__ul js-seccion1__ul">

            </ul>
            <div class="c-seccion1__divisor"></div>
            <div class="c-seccion1__flechas js-seccion1__flechas">
                <li class="c-seccion1__flecha"><i class="fa-solid fa-arrow-left-long"></i></li>
                <li class="c-seccion1__flecha"><i class="fa-solid fa-arrow-right-long"></i></li>
            </div>
        </div>
    `;
    contenedorProducto.appendChild(producto);
}

function cargarBolitas (contenedor) {
    botasColeccion.forEach( bota => {
        const li = document.createElement('li');
        li.classList.add('c-seccion1__li');
        li.innerHTML = `
            <i class="fa-solid fa-circle"></i>
        `;
        contenedor.appendChild(li);
    });
    contenedor.children[0].children[0].classList.toggle('fa-solid');
    contenedor.children[0].children[0].classList.toggle('fa-regular');
}

function moverImagen (contador, nombreBota, imagen) {
    const nuevaBota = botasColeccion.find(element => element.id === contador);
    const {nombre, src} = nuevaBota;
    nombreBota.textContent = nombre;
    imagen.setAttribute('src', src);
}

function moverBolita (contenedor, id, direccion) {
    contenedor.children[id].children[0].classList.toggle('fa-solid');
    contenedor.children[id].children[0].classList.toggle('fa-regular');
    if (direccion === 'izquierda'){
        contenedor.children[id+1].children[0].classList.toggle('fa-solid');
        contenedor.children[id+1].children[0].classList.toggle('fa-regular');
    } else if (direccion === 'derecha') {
        contenedor.children[id-1].children[0].classList.toggle('fa-solid');
        contenedor.children[id-1].children[0].classList.toggle('fa-regular');
    }
}

function limpiarHTML (contenedor) {
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}