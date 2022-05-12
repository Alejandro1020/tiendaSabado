// importando modulos

import { pintarTienda } from "./llenadoTiendas.js";
import {ampliarInformacion} from './ampliarInfo.js';
import {pintarCarrito} from  './pintarCarrito.js'


//
let producto={}

//llamando al modulo de pintar
pintarTienda()

// llamando al madulo ampliarInfo
let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(event){

    let modalInfoProducto= new bootstrap.Modal(document.getElementById('modalInfoProducto'))
    producto=ampliarInformacion(event)
    console.log(producto)
    let cantidad= document.getElementById("cantidadProducto")
    cantidad.value=1
    modalInfoProducto.show()

})

// detectar la accion de añadir al carrito

//carrito es un arreglo de productos(arreglo de objetos)

let carrito=[]

let boton=document.getElementById("btnAdd")
boton.addEventListener('click',function(evento){
    

    // 1.capturar la cantidad del producto

    let cantidad=document.getElementById("cantidadProducto").value

    // 2. agrego la cantidad al objeto producto
    producto.cantidad=cantidad
    console.log(producto)

    // se agrega el subtotal

    producto.subtotal=producto.cantidad*producto.precio

    producto.total=producto.subtotal


    //3. agregar el producto al carrito
    carrito.push(producto)

    console.log(carrito)
    
    // 4 calculo la sumatoria de cantidades

    let suma=0
    

    carrito.forEach(function(producto){
        
        
        suma = suma + Number(producto.cantidad);
        
       
    })
    



    pintarCarrito(suma);
    let modalInfoProducto= new bootstrap.Modal(document.getElementById('modalInfoProducto'))
    modalInfoProducto.hide()

    
    console.log(cantidad)

   
  
})

 let limpiarCarro=document.getElementById("btnlimpiar")
 limpiarCarro.addEventListener("click", function(evento){
    carrito= []
    capsula.textContent=carrito.cantidad
    capsula.classList.add("invisible")
    modalInfoProducto.hide()

 })




// 4. Ver resumen de venta

let botonCarrito = document.getElementById("botonCarrito")
botonCarrito.addEventListener("click",function(evento){

    evento.preventDefault()

    let contenedor=document.getElementById("contenedorventa")

    // recorrer el carrito para pintar los productos en la factura

    let modalventa = new bootstrap.Modal(document.getElementById('resumenCarrito'))

    //borrar el contenido html de una seccion
    contenedor.innerHTML=""

    carrito.forEach(function(producto){
        // traversing
        
        let fila= document.createElement("div")
        fila.classList.add("row")

        let columna1=document.createElement("div")
        columna1.classList.add("col-12","col-md-4","h-50px")

        let columna2=document.createElement("div")
        columna2.classList.add("col-12","col-md-8")

        let columna3=document.createElement("div")
        columna3.classList.add("col-12","col-md-8")
      
       

      

        

        let foto=document.createElement("img")
        foto.classList.add("img-fluid","w-100")
        foto.src=producto.foto

        let nombre=document.createElement("h4")
        nombre.textContent=producto.nombre
       
        let precio=document.createElement("h4")
        precio.textContent=producto.precio

        let cantidad=document.createElement("h4")
        cantidad.textContent=producto.cantidad

        

      
        let subtotal=document.createElement("h4")
        subtotal.textContent=producto.subtotal
        
        

        let total =document.createElement("h4")

        total.textContent=producto.total

        // gerarquia  padres e hijos

        columna1.appendChild(foto)

        columna2.appendChild(nombre)
        columna2.appendChild(precio)
        columna2.appendChild(cantidad)
        columna2.appendChild(subtotal)
        columna2.appendChild(total)
        

        fila.appendChild(columna1)
        fila.appendChild(columna2)

        
        
      

        contenedor.appendChild(fila)  
        
      
        
        
        
        



    })
    modalventa.show()

    
})