"use strict"

/* Написать функцию возвращающую n-тое число Фибаначи*/


function fin(n) {
    let a = 1;
    let b = 1;
    let num = 0
    for (let i = 3; i <= n; i++) {
        num = a + b;
        a = b;
        b = num;
    }
    return b;
}

console.log(fin(7));


function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }