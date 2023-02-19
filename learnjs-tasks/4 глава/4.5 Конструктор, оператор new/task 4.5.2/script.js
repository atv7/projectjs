"use strict"

/*
Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.
Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/


// проверочная функция с вызовом и выводом через console.log() без prompt
/* 
function Calculator() {
  this.read = function(x ,y) {
    this.x = x;
    this.y = y;
  }

  this.sum = function() {
    return (this.x + this.y);
  }

  this.mul = function() {
    return (this.x * this.y);
  }
}

let miniCalc = new Calculator();

miniCalc.read(2, 3)
console.log(miniCalc.sum());
*/


function Calculator() {
  this.read = function() {
    this.x = +prompt("Введите х", 0);
    this.y = +prompt("Введите y", 0);
  }

  this.sum = function() {
    return (this.x + this.y);
  }

  this.mul = function() {
    return (this.x * this.y);
  }
}
