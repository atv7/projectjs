"use strict"

/*

Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

*/

function getSecondsToTomorrow() {
  let date = new Date();
  let allSecondsInDay = 24 * 3600;
  let currentDate = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
  //let currentDate = 23 * 3600; // проверка случая из примера, когда t = 23:00
  return allSecondsInDay - currentDate;


}


console.log(getSecondsToTomorrow());