"use strict"

/*
У нас есть объект, в котором хранятся зарплаты нашей команды:

Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0.
*/

function sumSalaries(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let salaries_2 = {};

console.log(sumSalaries(salaries));
console.log(sumSalaries(salaries_2));