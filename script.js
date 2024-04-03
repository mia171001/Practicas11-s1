// Ejemplo 1: Uso de getElementById y querySelector
const elemento1 = document.getElementById('elemento1'); // Utiliza getElementById para seleccionar el elemento con el ID 'elemento1'
const parrafo = document.querySelector('.parrafo');    // Utiliza querySelector para seleccionar el primer elemento con la clase 'parrafo'

console.log(elemento1);  // Muestra el elemento1 seleccionado
console.log(parrafo);    // Muestra el párrafo seleccionado

// Ejemplo 2: Uso de textContent e innerHTML
const elemento2 = document.getElementById('elemento2'); // Utiliza getElementById para seleccionar el elemento con el ID 'elemento2'
elemento2.textContent = "Nuevo contenido";              // Cambia el texto del elemento usando textContent
elemento2.innerHTML = "<strong>Nuevo</strong> contenido"; // Cambia el contenido HTML del elemento usando innerHTML

// Ejemplo 3: Uso de querySelector para estilos y classList.add
const elemento3 = document.querySelector('#elemento3'); // Utiliza querySelector para seleccionar el elemento con el ID 'elemento3'
elemento3.style.color = 'blue';                        // Cambia el color del texto a azul
elemento3.classList.add('resaltado');                  // Agrega la clase 'resaltado' al elemento

console.log(elemento3); // Muestra el elemento3 seleccionado

// Ejemplo 4: Uso de querySelector, parentElement y nextElementSibling
const parrafo1 = document.querySelector('#parrafo1');        // Utiliza querySelector para seleccionar el elemento con el ID 'parrafo1'
const contenedor = parrafo1.parentElement;                   // Obtiene el elemento padre del párrafo seleccionado
const siguienteParrafo = parrafo1.nextElementSibling;        // Obtiene el siguiente elemento hermano del párrafo seleccionado

console.log(contenedor.id);          // Muestra el ID del contenedor del párrafo seleccionado
console.log(siguienteParrafo.textContent); // Muestra el texto del siguiente párrafo después del párrafo seleccionado

// Creación de elementos con createElement, textContent, classList.add y appendChild
const contenedor5 = document.getElementById('contenedor');  // Utiliza getElementById para seleccionar el contenedor
const nuevoElemento = document.createElement('p');           // Crea un nuevo elemento de párrafo
nuevoElemento.textContent = "Nuevo párrafo";                // Establece el contenido de texto del nuevo párrafo
nuevoElemento.classList.add('resaltado');                   // Agrega la clase 'resaltado' al nuevo párrafo
contenedor5.appendChild(nuevoElemento);                     // Agrega el nuevo párrafo como hijo del contenedor







