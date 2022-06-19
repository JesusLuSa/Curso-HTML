//Arreglos

var array = new Array();

array[0] = "cadena";
array[1] = 2;
array[2] = 3.56;
array[3] = function(nombre) {
    console.log("Hola " + nombre);    
}

array[4] = {curso: "HTML, CSS Y JAVASCRIPT"};

console.log(array);
console.log(array[4].curso);

//creacióm de un arreglo asignando valores
var nombres = ["Ricardo", "Carlos", "Jesus", "Aldo"];
console.log(nombres);

for(var i = 0; i < nombres.length; i++){
    console.log("Hola "+nombres[i]);
}

nombres[100] = "Juan";

for(var i = 0; i < nombres.length; i++){
    console.log("Hola "+nombres[i]);
}

var miObj = {
    nombre: "Jesus",
    curso: "HTML, CSS Y JS",
    unidad: "Multimedia"
};

for (var prop in miObj){
    console.log(prop + ":" + miObj[prop]);
}

for (var nombre in nombres){ 
    console.log("Hola " + nombres[nombre]);
}