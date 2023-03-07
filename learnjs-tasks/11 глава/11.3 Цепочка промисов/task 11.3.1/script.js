"use strict"

/*
Являются ли фрагменты кода ниже эквивалентными? Другими словами, ведут ли они себя одинаково во всех 
обстоятельствах, для всех переданных им обработчиков?
*/

promise.then(f1).catch(f2); // Здесь есть обработка ошибки в catch и если она появится в f1 то все нормально

promise.then(f1, f2); // здесь обработки ошибки нет = плохо