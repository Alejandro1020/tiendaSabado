
export function pintarTienda() {
    



let productos=[
    {nombre:"Mouse",precio:120000,foto:"img/mouse.jpg",descripcion:"Mouse gamer inalambrico"},
    {nombre:"Silla gamer",precio:450000,foto:"img/silla.jpg",descripcion:"Silla gamer hergonomica"},
    {nombre:"Teclado",precio:70000,foto:"img/teclado.jpg",descripcion:"Teclado gamer alambrco"},
    {nombre:"Pantalla",precio:1500000,foto:"img/pantalla.jpg",descripcion:"Pantalla 8K"},
    {nombre:"Torre gamer",precio:3500000,foto:"img/cpu gamer.jpg",descripcion:"Cpu Ultima generación"},
    {nombre:"Diademas",precio:80000,foto:"img/auriculares.jpg",descripcion:"Diadema Tipo gamer"},
    {nombre:"Bolso",precio:160000,foto:"img/bolso.jpg",descripcion:"Morral con luces led mas puerto de carga"},
    {nombre:"Procesador",precio:600000,foto:"img/procesador.jpg",descripcion:"Procesador ryzen "},
    {nombre:"Tarjeta grafica",precio:1200000,foto:"img/tarjeta.jpg",descripcion:"Tarjeta grafica 7800"},
    {nombre:"Discos solidos",precio:210000,foto:"img/ssd.jpg",descripcion:"Disco de estado solido"}
    

]

// creo una variable para almacenar la base sobre la cual voy a pintar

let fila= document.getElementById("fila")


//Recorriendo un arreglo en js

productos.forEach(function (producto){
    
    // receta para pintar con js
    // 1 comience a crear la estructura que necesite

    //crear columna
    let columna = document.createElement("div")
    columna.classList.add("col")

    //creo la tarjeta
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100" )

    // creo la imagen
    let foto = document.createElement("img")
    foto.classList.add("card-img-top","h-100")
    foto.src = producto.foto


    // crear contenido de la tarjeta
    let descripcion =document.createElement("p")
    descripcion.textContent="productos a la venta"

    // crear relacion y precio

   let titulo=document.createElement("h3")
   titulo.classList.add("text-center")
   titulo.textContent=producto.nombre

    let costo=document.createElement("h4")
    costo.classList.add("text-center")
    costo.textContent=producto.precio

    // creando un boton

        let boton=document.createElement("button")
        boton.setAttribute("type","button")
        boton.classList.add("btn","btn-warning","mx-4","mb-4")
        boton.textContent="Ver producto"

    //2 ordenar la estructura gerarquia

    tarjeta.appendChild(foto)
    tarjeta.appendChild(titulo)
    tarjeta.appendChild(costo)
    tarjeta.appendChild(boton)

    columna.appendChild(tarjeta)
    fila.appendChild(columna)
    
    
    



})

}



// // Escuchando link en el boton

// let boton = document.getElementById("boton")

// // Detectando el primer evento

// boton.addEventListener("click",cambiarFoto)

// function cambiarFoto() {
//     let foto=document.getElementById("fotoPrueba")
//     foto.src="../img/pantalla.jpg"
    
// }