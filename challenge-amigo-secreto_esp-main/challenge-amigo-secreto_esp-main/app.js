//Array para almacenar amigos
let amigos = [];
let nombreAmigo = 0;


//Creamos la función para agregar al amigo
function agregarAmigo() {
    nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo === '') {
        alert("Por favor, inserte un nombre");
    } else {
        amigos.push(`${nombreAmigo}`);
        limpiarCelda();
        document.getElementById("nuevoAmigo").innerHTML="Ingresa otro nombre";
        imprimirAmigo();
    }
};

//Creamos una función lista para cada amigo
function imprimirAmigo() {
    var textoLista = '';
    for (i = 0; i < amigos.length; i++) {
        textoLista += `<li>${amigos[i]}</li>`;
        document.getElementById("listaAmigos").innerHTML = textoLista;
    }
};

//Añadimos una función para limpiar el nombre almacenado
function limpiarCelda() {
    document.querySelector("#amigo").value = '';
};

//Función para sortear amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos ingresados. Por favor, añada al menos uno.');
    } else {
       let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
       document.getElementById("resultado").innerHTML=`Su amigo secreto es ${amigoSorteado}`;
       document.getElementById('reset').removeAttribute('disabled')
    };
};

function resetear() {
    document.getElementById("resultado").innerHTML='';
    document.getElementById("listaAmigos").innerHTML='';
    document.getElementById("nuevoAmigo").innerHTML="Ingresa el nombre de tus amigo(a)s.";
    amigos = [];
};