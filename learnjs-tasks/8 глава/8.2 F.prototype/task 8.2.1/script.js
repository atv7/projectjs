"use strict"

/*
В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.

Сначала у нас есть такой код:
*/

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

console.log( rabbit.eats ); // true

//Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

console.log( rabbit.eats ); // true, т.к. rabbit был создан пока мы ссылались на свойство eats, а уже после prototype
                            // стал равен {}

//…А если код такой (заменили одну строчку)?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

console.log( rabbit.eats ); // false, т.к. изменив объект по одной ссылке (строка 41) мы изменили его и в стркое 36 


//Или такой (заменили одну строчку)?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

console.log( rabbit.eats ); // true, т.к. в строке 55 происходит удаление свойства eats, которого у rabbit не существует

//Или, наконец, такой:

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

console.log( rabbit.eats ); // undefinded, удаление по одной ссылке, удаляет и в другой.




