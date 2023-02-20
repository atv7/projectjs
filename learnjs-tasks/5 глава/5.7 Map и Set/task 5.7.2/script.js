"use strict"

/*
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

*/

function aclean(arr) {
  let obj = {};
  for (let word of arr) {
    let sorted = word.toLowerCase().split('').sort().join('');

    obj[sorted] = word;
  }
  return Object.values(obj);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); 