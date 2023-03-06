"use strict"

/*
Объект rabbit наследует от объекта animal.

Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?
*/

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat(); // Rabbit получит свойство full, т.к. this будет ссылаться на rabbit