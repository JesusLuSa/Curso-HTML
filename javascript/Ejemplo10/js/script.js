//Las funciones son objetos 

function mul(x ,y){
    return x = y;
}

mul.version = "v.1.0.0";
console.log(mul.version);

//Fábrica de funciones

function makeMul(num){
    var miFuncion = function (x) {
        return num * x;
    }
    return miFuncion;  //retorna funciones
}

var mul3 = makeMul(3);
console.log(mul3(5));

function hacerOperacion(x, operacion){
    return operacion(x);
}

var res = hacerOperacion(5, mul3);
console.log(res);

var duplicar = makeMul(2)
res = hacerOperacion(100, duplicar);
console.log(res);