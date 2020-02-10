// ------------------------ ОБЄКТ КАЛЬКУЛЯТОР З МЕТОДАМИ sum(), mul();-----------------------------------------------
let calc = {
  sum: function(a, b) {
    return console.log(a + b);
  },
  mul: function(a, b) {
    return console.log(a * b);
  }
};
calc.sum(20, 30);
calc.mul(2, 3);

//-----------------------  ІНІЦІАЛІЗАЦІЯ ОБЄКТА ЧЕРЕЗ ФУНКЦІЮ - КОНСТРУКТОР!--------------------------------------------

function Calc(a, b) {
  this.sum = function() {
    return console.log(a + b);
  };
  this.mul = function() {
    return console.log(a * b);
  };
}

let calculator1 = new Calc(2, 3);
let calculator2 = new Calc(6, 3);
calculator1.sum();
calculator2.mul();
