"use strict"

/*
Что выведет функция?

*/

function f() {
    console.log( this ); // ?
  }
  
  let user = {
    g: f.bind(null)
  };
  
  user.g(); // выведет null, так как в bind мы не передали this