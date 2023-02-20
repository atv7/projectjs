"use strict"

/*
Допустим, у нас есть массив arr.

Создайте функцию unique(arr), которая вернёт массив уникальных,
 не повторяющихся значений массива arr.
*/


function unique(arr) {
  let set = new Set();
  arr.forEach(function(elem) { set.add(elem)});
  return set
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare,Krishna,:-O