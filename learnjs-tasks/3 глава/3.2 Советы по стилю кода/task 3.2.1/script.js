"use strict"

// Какие недостатки вы видите в стиле написания кода этого примера?

function pow(x, n) // нет пробела между аргументами
{ // Скобка должна быть выше
  let result = 1; // лучше отделять пустой строкой логические блоки а так же нет пробелов
  for (let i = 0; i < n; i++) { result *= x; } // неправильная запись, лучше разбить на несколько строк, нет пробелов
  return result;
}

let x = prompt("x?", ''),
    n = prompt("n?", '') // критическая ошибка и нет пробелов
if (n <= 0) // нет проеблов
{ // скобка на отдельной строке
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
} else // можно не использовать блок else если выше после alert прописать return
// а так же нельзя разделять { else
{
  alert(pow(x, n)) // прпущена ; и нет пробелов
}