"use strict"

/*
Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – 
мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.

Можем ли мы сделать так?


Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает.
И пример функции-конструктора, с которой такой код поведёт себя неправильно.

*/


//Работает
function Programmer(name) {
  this.name = name;
}

let programmer1 = new Programmer('Vasya');
let programmer2 = new programmer1.constructor('Petya')

console.log(programmer2.name);


// Не работает
function Programmer(name) {
  this.name = name;
}

Programmer.prototype = { //не работает т.к. мы переназначили Programmer.prototype
  flag: false,
};


let programmer1 = new Programmer('Vasya');
let programmer2 = new programmer1.constructor('Petya')

console.log(programmer2.name); 