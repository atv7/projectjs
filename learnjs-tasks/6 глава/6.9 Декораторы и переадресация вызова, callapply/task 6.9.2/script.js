"use strict"

/*
Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд.
*/

function f(x) {
    console.log(x);
  }

function delay(f, ms) {

    return function(...args) {
        let saveThis = this; 
        setTimeout(function() {
          f.apply(saveThis, args); 
        }, ms);
      };
}
  
  // создаём обёртки
  let f1000 = delay(f, 1000);
  let f1500 = delay(f, 1500);
  
  f1000("test"); // показывает "test" после 1000 мс
  f1500("test"); // показывает "test" после 1500 мс