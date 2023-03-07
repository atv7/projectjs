"use strict"

/*
Что вы думаете? Выполнится ли .catch? Поясните свой ответ.
*/

new Promise(function(resolve, reject) {
    setTimeout(() => {
      throw new Error("Whoops!");
    }, 1000);
  }).catch(console.log); // Нет, не выполнится. Тут есть обработчик ошибок, но ошибка генерируется позже.