//función auto-ejecutable.
(function () {
    console.log("Iniciando");
    const boton1 = document.querySelector("#boton1"); //Busca en el html, se puede buscar por: #id, .class y tag.
    boton1.addEventListener("click",function () { //El boton responde al hacer click y manda a la consola un mensaje.
        console.log("Boton presionado");
        const content = document.querySelector("#content");
        content.innerHTML = "<h1 id='texto'>Hola mundo</h1>";
    })
    console.log(boton1); //imprime lo que encontro en el HTML.
    const boton3 = document.querySelector("#boton3");
    boton3.addEventListener("click", cambiar_color);
}
)(); 

function borrar() {
    console.log("Borrando...");
    const content = document.querySelector("#content");
    content.innerHTML = "";
}

function cambiar_color(){
    console.log("Cambiando color...");
    const texto = document.querySelector("#texto");
    if(texto != null && texto != undefined){
        texto.setAttribute("style", "color:blue");
    }
}