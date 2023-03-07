"use strict"

/*
<<<<<<< HEAD
Что выведет код ниже?
*/

let promise = new Promise(function(resolve, reject) {
    resolve(1); // (*)
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert); // Код выведет 1, так как после первого resolve в (*) код дальше выполняься не будет
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
