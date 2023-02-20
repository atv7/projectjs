"use strict"

/*
Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними,
 например, применить метод .push.
Но это не выходит
Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?
*/

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys()); //добавляем Array.from()

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");
// Так произошло, потому что map.keys() возвращает итерируемый объект. Нужно преобразовать его в массив