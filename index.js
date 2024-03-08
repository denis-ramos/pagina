/* console.log("hola mundo");

suma(18, 98);

function suma(a, b) {
  let c = a + b;

  return console.log(c);
}
 */

let botonExistente = document.querySelector("button");

// Clona el botón existente para crear uno nuevo con las mismas características
let facebook = botonExistente.cloneNode(true);

// Cambia el texto del botón clonado
facebook.textContent = "Hola dijo Facebook";

// Añade el nuevo botón al documento
let contenedores = document.querySelector(".botones");
contenedores.appendChild(facebook);