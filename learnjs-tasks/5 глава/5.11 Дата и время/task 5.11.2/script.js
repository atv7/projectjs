"use strict"

/*
Напишите функцию getWeekDay(date), показывающую день недели 
в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

*/

let days = {
  '0' : 'ВС',
  '1' : 'ПН',
  '2' : 'ВТ',
  '3' : 'СР',
  '4' : 'ЧТ',
  '5' : 'ПТ',
  '6' : 'СБ',
}

function getWeekDay(date) {
  let day = date.getDay();
  return days[day];
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getWeekDay(date) );        // нужно вывести "ВТ"