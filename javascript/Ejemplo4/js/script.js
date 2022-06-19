var empresa = new Object();

empresa.nombre = "Facebook";
empresa.ceo = new Object();
empresa.ceo.nombre = "Jesús";
empresa.ceo.apellido = "Lugo";

console.log(empresa);
console.table(empresa);

console.log(empresa.ceo.nombre);
console.log(empresa["nombre"]);

var attr = "No de usuarios";
empresa[attr] = 10000000000000;

console.log(empresa[attr]);
console.log(empresa["No de usuarios"]);

var Facebook = {
  nombre: "Facebook",
  ceo:{
      nombre: "Jesús",
      apellido: "Lugo",
  },
  No_de_usuarios: 100000000000,
}

console.table(Facebook);