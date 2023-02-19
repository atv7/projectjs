"use strict"

/*
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася";

*/

function ucFirst(string) {
  if (!string) return string;
  string = string.toLowerCase();
  string = string[0].toUpperCase() + string.slice(1);
  return string
}


console.log(ucFirst("вася"));
