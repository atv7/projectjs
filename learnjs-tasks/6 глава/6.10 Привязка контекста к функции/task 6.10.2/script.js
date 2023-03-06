"use strict"

/*
В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.
*/

function sayHi() {
    console.log( this.name );
  }
  sayHi.test = 5;
  
  let bound = sayHi.bind({
    name: "Вася"
  });
  
  console.log( bound.test ); // Выводит undefinded, т.к. мы привязывали к bound уже другой объект
                            // у которого нет свойств test