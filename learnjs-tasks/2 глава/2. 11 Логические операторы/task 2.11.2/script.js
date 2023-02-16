"use strict"

/*
Что выведет код ниже?
*/

alert( alert(1) || 2 || alert(3) ); // выполнит сначала alert(1), alert вернет undefinded и выполнит alert(2)