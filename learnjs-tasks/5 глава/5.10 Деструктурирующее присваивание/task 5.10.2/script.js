"use strict"

/*
У нас есть объект salaries с зарплатами:

Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.

*/

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
  let maxSalary = 0;
  let nameMax = null;

  for (let [name, salary] of Object.entries(salaries)){
    if (salary > maxSalary) {
      maxSalary = salary;
      nameMax = name;
    }
  }
  return nameMax;
}

console.log(topSalary(salaries));