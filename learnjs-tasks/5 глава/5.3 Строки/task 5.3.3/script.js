"use strict"

/*
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, 
если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

truncate("Всем привет!", 20) = "Всем привет!"
*/


function truncate(str, maxlength) {
  if (str.length <= maxlength) {
    return str;
  }
  str = str.slice(0, maxlength + 1);
  return str.slice(0, -2) + '…';
}

console.log(truncate("Всем привет!", 20));
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))