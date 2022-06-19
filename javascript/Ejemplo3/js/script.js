//Concatenación de cadenas

var str = "Hola";

//str += " Mundo";
str = str + " Mundo";
console.log("¡" + str + "!");

//operadores matemáticos
console.log((5 + 4) / 2); //Números de doble precisión double
console.log(6 - 2);
console.log(4 % 2);
console.log(4 * 1000);
console.log(undefined / 5); //undefined es un tipo de dato

function test(a) {
  console.log(a / 5);
}

test(); //Llamada función con un valor indefinido
test(10);

//Operadores relacionales

var x = 4,
  y = 4;

if (x == y) {
  console.log("x=4 es igual a y=4");
}

x = "4";

if (x == y) {
  console.log("x='4' es igual a y=4");
}

//Operador estrictamente igual

if (x === y) {
  console.log("Estrictamente: x='4' es igual a y=4");
} else {
  console.log("Estrictamente: x='4' NO ES IGUAL A y=4");
}

x = 5;
if (x != y) {
  console.log("x=5 es distinto de y=4");
}

if (x > y) {
  console.log("x=5 es mayor a y=4");
}

x = 3;
if (x < y) {
  console.log("x=3 es menor que y=4");
}

x = 10;
if (x >= y) {
  console.log("x=10 es mayor o igual a y=4");
}

x = 3;
if (x <= y) {
  console.log("x=3 es menor o igual que y=4");
}

/*******************************************************
 * Operadores lógicos
 *******************************************************/

console.log(true || false);
console.log(true || true);
console.log(false || false);

console.log(true && false);
console.log(true && true);
console.log(false && false);

if (false || null || undefined || "" || 0 || NaN) {
  console.log("Este código siempre se ejecuta");
} else {
  console.log("Todo es falso");
}

if (true && "hello" && 1 && -1 && "false") {
  console.log("Todo es verdadero");
}

var sum = 0;
for (var i = 1; i <= 100; i++) {
  console.log(i);
  sum += i;
}

console.log("La suma de los primeros 100 números es: " + sum);

i = 1;
sum = 0;
while (i <= 100) {
  sum += i;
  i += 1;
}

console.log("La suma de los primeros 100 números con while es: " + sum);

function test2(arg1) {
  arg1 = arg1 || "predeterminado"; // si se pasa un valor indefinido arg1 tomara el valor de "predeterminado"
  //arg1 = "predeterminado" || arg1; //siempre tomara el primer argumento verdadero, por eso importa el orden de los argumentos
  console.log("Valor: " + arg1);
}

test2();
test2("Hola");
