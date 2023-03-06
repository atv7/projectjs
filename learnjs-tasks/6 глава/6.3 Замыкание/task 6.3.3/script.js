"use strict"

/*
Посмотрите на код. Какой будет результат у вызова на последней строке?

*/

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi(); // Будет ошибка, т.к. sayHi объявлена внутри блока if и не видна в глобаьном окружении