"use strict"

/*
Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

*/

function unique(arr) {
  let res = [];

  for (let value of arr) {
    if (!res.includes(value)) {
      res.push(value);
    }
  }
  return res
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O