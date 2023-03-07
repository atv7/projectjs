"use strict"

/*
Что выведет код ниже?
*/

let promise = new Promise(function(resolve, reject) {
    resolve(1); // (*)
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert); // Код выведет 1, так как после первого resolve в (*) код дальше выполняься не будет