//función auto-ejecutable.
(function () {
    console.log("Iniciando");
    const boton1 = document.querySelector("#boton1"); //Busca en el html, se puede buscar por: #id, .class y tag.
    boton1.addEventListener("click",function () { //El boton responde al hacer click y manda a la consola un mensaje.
        console.log("Boton presionado");
        const msg = document.querySelector("#msg").value;
        const content = document.querySelector("#content");
        content.innerHTML = "<h1 id='texto'>"+msg+"</h1>";
        //content.innerHTML = "<h1 id='texto'>HOLA MUNDO</h1>";
    })
    console.log(boton1); //imprime lo que encontro en el HTML.
    const boton3 = document.querySelector("#boton3");
    boton3.addEventListener("click", cambiar_color);

    const boton4 = document.querySelector("#boton4");
    boton4.addEventListener("click", escribir_texto);
}
)(); 

function borrar() {
    console.log("Borrando...");
    const content = document.querySelector("#texto");
    //content.innerHTML = "";
    if(content != null && content != undefined){ //Condición para que no aparezca un error cuando se presione más de una vez el botón
        content.remove(); //En vez de borrar content se borra el texto para que no de error
    }
}

function cambiar_color(){
    console.log("Cambiando color...");
    const texto = document.querySelector("#texto");
    if(texto != null && texto != undefined){
        texto.setAttribute("style", "color:blue");
    }
}

function escribir_texto(){
    const msg = document.querySelector("#msg").value = "Hola mundo"; //Texto que al apretar el cuarto boton aparecera en la caja de texto
}