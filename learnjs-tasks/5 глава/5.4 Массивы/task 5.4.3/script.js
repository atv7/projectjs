"use strict"

/*
Каков результат? Почему?ния startingValue.

*/

let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

arr[2](); // выведет сам массив, так как this ссылается на arr