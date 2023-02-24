"use strict"

/*
Как мы уже знаем, все объекты наследуют от Object.prototype и имеют доступ к «общим» методам объекта, 
например hasOwnProperty.

В чем разница?

*/

class Rabbit {
  constructor(name) {
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

// метод hasOwnProperty от Object.prototype
console.log( rabbit.hasOwnProperty('name') ); // true
//Но что если мы явно напишем "class Rabbit extends Object" – тогда результат будет отличаться
//от обычного "class Rabbit"?

// !!В случае выше у нас нет доступа к статическим методам Object


//Ниже пример кода с таким наследованием (почему он не работает? исправьте его):

class Rabbit extends Object {
  constructor(name) {
    super(); // при вызове конструктора нужен метод super()
    this.name = name; 
  }
}

let rabbit = new Rabbit("Кроль");

console.log( rabbit.hasOwnProperty('name') ); // Ошибка