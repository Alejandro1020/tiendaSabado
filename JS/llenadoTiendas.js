let productos=[
    {nombre:"mouse",precio:120000,foto:"../img/mouse.jpg",descripcion:"Mouse gamer inalambrico"},
    {nombre:"teclado",precio:70000,foto:"../img/",descripcion:"Teclado gamer alambrco"},
    {nombre:"Pantalla",precio:1500000,foto:"../img/pantalla.jpg",descripcion:"Pantalla 8K"},
    {nombre:"Torre gamer",precio:3500000,foto:"../img/cpu gamer.jpg",descripcion:"Cpu Ultima generación"},
    {nombre:"Diademas",precio:80000,foto:"../img/auriculares.jpg",descripcion:"Diadema Tipo gamer"},
    {nombre:"Bolso",precio:160000,foto:"../img/bolso.jpg",descripcion:"Morral con luces led mas puerto de carga"},
    {nombre:"Procesador",precio:600000,foto:"../img/procesador.jpg",descripcion:"Procesador ryzen "},
    {nombre:"Tarjeta grafica",precio:1200000,foto:"../img/tarjeta.jpg",descripcion:"Tarjeta grafica 7800"},
    {nombre:"Silla gmer",precio:450000,foto:"../img/silla.jpg",descripcion:"Silla gamer hergonomica"}

]

//Recorriendo un arreglo en js
productos.forEach(function (producto){
    console.log("Hola mundo")
})

// Escuchando link en el boton

let boton = document.getElementById("boton")

// Detectando el primer evento

boton.addEventListener("click",cambiarFoto)

function cambiarFoto() {
    let foto=document.getElementById("fotoPrueba")
    foto.src="../img/pantalla.jpg"
    
}