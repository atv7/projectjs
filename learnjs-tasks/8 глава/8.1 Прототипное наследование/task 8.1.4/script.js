"use strict"

/*
У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.

Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?
*/

let hamster = {
  //stomach = [], - неверно

  eat(food) {
    this.stomach = [],
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log( lazy.stomach ); // apple
//Оба хомяка наедались, т.к. у hamster было общее свойство stomach, к которому могли ссылаться оба прототипа.
//приписав к stomach 'this' мы решаем эту проблему 