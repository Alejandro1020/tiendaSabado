
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

let botonRegistro = document.getElementById("registro")
let modalInformativo= new bootstrap.Modal(document.getElementById('modalInformativo'))
botonRegistro.addEventListener("click", function (evento) {
    evento.preventDefault()
    let correo = document.getElementById("correo").value
    let password = document.getElementById("password").value
    console.log(correo, password)

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, correo, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
            // ...
            let textoInformativo=document.getElementById("informacioGeneral")
            let formulario=document.getElementById("formularioRegistro")
            formulario.reset()
            textoInformativo.textContent="Exito en el registro"
            modalInformativo.show()
            setTimeout(function(){
                modalInformativo.hide()
            },2000)
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            let textoInformativo=document.getElementById("informacioGeneral")
            textoInformativo.textContent="Falla:"+errorMessage
            modalInformativo.show()
        });


})