"use strict"

/*
<<<<<<< HEAD
Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.

Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, 
так чтобы мы могли добавить к нему .then:
*/

function delay(ms) {
    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve(), ms);
    });
    return promise;
  }
  
delay(3000).then(() => console.log('выполнилось через 3 секунды'));
=======
Взгляните на следующий код:

let str = "Привет";

str.test = 5;

alert(str.test);
Как вы думаете, это сработает? Что выведется на экран?

*/

let str = "Привет";

str.test = 5; // ошибка, т.к. примитивы не могут хранить дополнительные данные

console.log(str.test);
>>>>>>> 1fc578af285dd3a75e5671e7a6b5cbcc7c2949cc
