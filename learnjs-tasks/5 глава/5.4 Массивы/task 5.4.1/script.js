"use strict"

/*

Что выведет следующий код?
*/

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
console.log( fruits.length ); // Обе переменные являются ссылками на один и тот же массив (объект) =>
                              // выведет 4