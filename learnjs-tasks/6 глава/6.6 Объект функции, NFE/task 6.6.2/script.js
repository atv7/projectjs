"use strict"

/*
Напишите функцию sum, которая бы работала следующим образом:

*/

function sum(a) {

    let currentSum = a;
  
    function func(b) {
      currentSum += b;
      return func;
    }
  
    func.valueOf = function() {
      return currentSum;
    };
  
    return func;
  }

console.log(sum(1)(2)); // 1 + 2
console.log(sum(1)(2)(3)); // 1 + 2 + 3
console.log(sum(5)(-1)(2)); 
console.log(sum(6)(-1)(-2)(-3));
console.log(sum(0)(1)(2)(3)(4)(5));