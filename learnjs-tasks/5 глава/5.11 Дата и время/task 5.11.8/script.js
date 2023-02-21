"use strict"

/*

Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm".
 А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

*/

function formatDate(date) {
  let currentDate = new Date();
  //let currentDateInSec = currentDate.getHours() * 3600 + currentDate.getMinutes() * 60 + currentDate.getSeconds();
  let dif = (currentDate - date);
  console.log(dif);
  if (dif < 1000) {
    return 'прямо сейчас';
  } else if (dif < 60000) {
    return `${(60000 - dif) / 1000} сек. назад`
  } else if (dif < 360000) {
    return `${(3600000 - dif)/ 600000} мин. назад`
  }else {
    return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
  }
}


console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"


console.log( formatDate(new Date(new Date - 86400 * 1000)) );