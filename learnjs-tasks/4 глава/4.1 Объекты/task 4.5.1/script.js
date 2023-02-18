"use strict"

/*
Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.
 */

let user = {}

user.name = "John";
console.log(user["name"])

user.surname = "Smith";
console.log(user["surname"])

user.name = "Pete";
console.log(user["name"])

delete user.name;
console.log(user["name"])