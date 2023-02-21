"use strict"

/*
В Европейских странах неделя начинается с понедельника (день номер 1),
 затем идёт вторник (номер 2) и так до воскресенья (номер 7). 
 Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

*/

let days = {
  '1' : 'ПН',
  '2' : 'ВТ',
  '3' : 'СР',
  '4' : 'ЧТ',
  '5' : 'ПТ',
  '6' : 'СБ',
  '7' : 'ВС',
}

function getLocalDay(date) {
  let day = date.getDay();
  (day == 0) ? day = 7 : day;
  return days[day];
}



let date = new Date(2012, 0, 1);  // 3 января 2012 года
console.log( getLocalDay(date) );       // вторник, нужно показать 2