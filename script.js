//función para validar el formulario de contacto
function validateForm() {
    //verificar que el usuario sea mayor de edad
    let edadInput = document.getElementById("edad");
    let edad = parseInt(edadInput.value);
    if (isNaN(edad) || edad < 18) {
        alert("Tienes que ser mayor de edad para esto.");
        edadInput.focus();
        return false;
    }

    //confirmacion del envio
    alert(`Gracias por suscribirte, ${nombre.value} :)`);
    return true;
}


//---funciones de los comentarios---

//función para cargar los comentarios guardados
function cargarComentariosGuardados() {
    var comentariosGuardados = localStorage.getItem("comentarios");
    if (comentariosGuardados) {
        document.getElementById("comentarios").innerHTML += comentariosGuardados;
    }
}

//guardar comentario en el localStorage
function guardarComentario(comentarioHTML) {
    var comentariosGuardados = localStorage.getItem("comentarios");
    if (comentariosGuardados) {
        comentariosGuardados += comentarioHTML;
    } else {
        comentariosGuardados = comentarioHTML;
    }
    localStorage.setItem("comentarios", comentariosGuardados);
}

//función de comentar
function comentar(event){
    //lo de event es para evitar que la página se refresque
    event.preventDefault();

    var comentarioUsuario = document.getElementById("comentario").value;
    var nom = document.getElementById("nom").value;
    if (nom == null || nom == ""){
        nom = "Anónimo";
    }

    var nuevoComentHTML = `<p class="coment">"${comentarioUsuario}" <em>-${nom}</em></p>`;
    guardarComentario(nuevoComentHTML); // guardar el comentario en localStorage

    var nuevoComent = document.createElement("div");
    nuevoComent.innerHTML = nuevoComentHTML;
    document.getElementById("comentarios").appendChild(nuevoComent);

    document.getElementById("comentario").value = "";
}

//llamar a la función al cargar la página para que cargue los comentarios guardados
window.onload = cargarComentariosGuardados;



//------funcies para el cambio de estilo------

//el boton ejecuta esta funcion
function cambiarTema() {
    if (localStorage.getItem('tema') === 'claro') {
        cambiarTemaOscuro();
        alert("Estilo cambiado a oscuro.");
    }
    else {
        cambiarTemaClaro();
        alert("Estilo cambiado a claro.");
    }
}
// tema oscuro
function cambiarTemaOscuro() {
    console.log("Poniendo tema oscuro...");
    document.documentElement.style.removeProperty('--color-1');
    document.documentElement.style.removeProperty('--color-2');
    document.documentElement.style.removeProperty('--color-3');
    document.documentElement.style.removeProperty('--color-4');
    document.documentElement.style.removeProperty('--color-5');
    document.documentElement.style.removeProperty('--subcolor-1');
    document.documentElement.style.removeProperty('--subcolor-2');
    document.documentElement.style.removeProperty('--subcolor-3');
    document.documentElement.style.removeProperty('--subcolor-4');
    document.body.style.removeProperty('background-color');
    localStorage.setItem('tema', 'oscuro');
}
// tema claro
function cambiarTemaClaro() {
    console.log("Cambiando tema a claro...");
    document.documentElement.style.setProperty('--color-1', '#bde6b5');
    document.documentElement.style.setProperty('--color-2', '#456560');
    document.documentElement.style.setProperty('--color-3', '#0a004f');
    document.documentElement.style.setProperty('--color-4', '#0f0072');
    document.documentElement.style.setProperty('--color-5', '#94c8b6');
    document.documentElement.style.setProperty('--subcolor-1', 'rgba(15, 209, 85, 0.3)');
    document.documentElement.style.setProperty('--subcolor-2', 'rgba(15, 209, 85, 0.2)');
    document.documentElement.style.setProperty('--subcolor-3', 'rgba(15, 209, 85, 0.1)');
    document.documentElement.style.setProperty('--subcolor-4', 'rgba(15, 209, 85, 0.05)');        
    document.body.style.backgroundColor = 'beige';
    localStorage.setItem('tema', 'claro');
}

//esto es para que se quede el estilo que hemos elegido
function cargarTema() {
    if (localStorage.getItem('tema') === 'claro') {
    cambiarTemaClaro();
    }
    else if (localStorage.getItem('tema') === 'oscuro'){
        cambiarTemaOscuro();
    }
}
window.onload = cargarTema;

