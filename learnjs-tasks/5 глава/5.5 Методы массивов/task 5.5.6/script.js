"use strict"

/*
Создайте функцию конструктор Calculator, 
которая создаёт «расширяемые» объекты калькулятора.

*/

function Calculator() {
  this.methods = {
    "+" : (a, b) => a + b,
    "-" : (a, b) => a - b,
  };

  this.calculate = function(str) {
    let split = str.split(' '),
    a = +split[0],
    operation = split[1],
    b = +split[2];

    if (isNaN(a) || isNaN(b) || !this.methods[operation]) {
      return NaN;
    }

    return this.methods[operation](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

let calc = new Calculator;

console.log( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8