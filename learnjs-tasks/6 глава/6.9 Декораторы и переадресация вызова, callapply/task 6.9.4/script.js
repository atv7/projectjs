"use strict"

/*
Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку, передавая вызов 
в f не более одного раза в ms миллисекунд. Те вызовы, которые попадают в период «торможения», игнорируются.
*/

function f(a) {
    console.log(a)
  }

function throttle(func, ms) {

    let ready = false;

    function wrapper() {
        
        func.apply(this, savedArgs);

        if (ready) {
            let savedArgs = arguments;
            let savedThis = this;
            return;
        }

        ready = true;

        setTimeout(function() {
            ready = false;
            if (ready) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms)
    }

    return wrapper;
}
  
// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);
  
f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)
    
// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано