var msg = "en Global";
console.log("GLOBAL: mensaje = " + msg);

//a la variable a se le asigna la función
var a = function (){
    var msg = " en a";
    console.log("a: mensaje = " + msg);

    //La variable local aún tiene prioridad dentro de la función b
    function b(){
        console.log("b: mensaje = " + msg);
    }

    b();
}

a();