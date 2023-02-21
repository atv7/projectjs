"use strict"

/*
Напишите функцию count(obj), которая возвращает количество свойств объекта:

*/

function count(obj) {
  return Object.entries(obj).length;
}

let user = {
  name: 'John',
  age: 30
};

console.log( count(user) ); // 2