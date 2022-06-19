//función constructora de la "clase" Circulo
function Circulo(radio){
  this.radio = radio;
}

// función miembro de la "clase" Circulo
Circulo.prototype.getArea = 
    function(){
      return Math.PI*Math.pow(this.radio, 2);
    };

/*var C0 = Circulo(8);
No se puede llamar a esta función ya que no se usa la palabra reservada new
console.log(C0.getArea());*/ //código inválido
var C = new Circulo(10);
console.log(C.getArea());

var C2 = new Circulo(20);
console.log(C2);

var C3 = {
  radio:10,
  getArea: function () {
    var self = this;
    console.log(this);
    var radio2 = function () {
      self.radio = 20;
    }
    radio2();
    console.log(this.radio);
    return Math.PI*Math.pow(this.radio, 2);  
  }
};

console.log(C3.getArea());