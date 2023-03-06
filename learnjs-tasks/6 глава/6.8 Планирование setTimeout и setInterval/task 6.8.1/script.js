"use strict"

/*
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

*/

// function printNumbers(from, to) {
//     setTimeout(function print() {
//         console.log(from);
//         if (from < to) {
//             setTimeout(print, 1000);
//         }
//         from++   
//     }, 1000);

// }

function printNumbers(from, to) {
    let timerId = setInterval(function print() {
        console.log(from);
        if (from == to) {
            clearInterval(timerId);
        }
        from++
    }, 1000)
}
    

printNumbers(2, 8);