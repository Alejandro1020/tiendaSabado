//Comentario de linea

/*Comentario de bloque

*/

// variables


let nombreUsuario = "Alejo"
let estaturaUsuario=1.62
let edadUsuario= 33
let telefonoUduario="3003702855"
let esPaisa = true // o false "banderas"

// // CONSTANTES SIEMPRE EN MAYUSCULA
// const APELLIDOS_USUARIO = "Zamora Ramirez"

// // CONCATENAR
// console.log ("Buenas tardes "+ nombreUsuario + " Su edad es "+edadUsuario)

// // tamplete literals
// console.log(`Buenas tardes ${nombreUsuario} Su edad es ${edadUsuario}`)



// if (true){
//     let  nombreUsuario = "Angel"

// }

// // SALIDAS
// console.log (nombreUsuario)

// utillizando el DOM

let etiquetaTitulo= document.getElementById ("titulo")
etiquetaTitulo.textContent="Como estas"
etiquetaTitulo.classList.add("text-danger")
etiquetaTitulo.classList.add("text-center")


let cambiarMenu = document.getElementById("menu")
cambiarMenu.textContent="HOME"
let etiquetaFotoback = document.getElementById("fotoback")
etiquetaFotoback.src="img/foto3.jpg"