"use strict"
const BIRTHDAY = '18.04.1982'; // использовать заглавные буквы?
                               // да, можно использовать, т.к. эта константная переменная известна
                               // до выполнения кода

const AGE = someCode(BIRTHDAY); // а здесь?
                                // здесь нельзя, т.к. переменная вычисляется во время выполнения кода
                                // и может изменяться со временем