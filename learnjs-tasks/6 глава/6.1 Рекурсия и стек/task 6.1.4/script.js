"use strict"

/*

Напишите функцию printList(list), которая выводит элементы списка по одному.

*/

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

// function printList(list) {
//     if (!list.next) {
//         console.log(list.value);
//     } else {
//     console.log(list.value);
//     printList(list.next)
//     }
// }

// printList(list);


function printList(list) {
    let tmp = list

    while(tmp) {
        console.log(tmp.value);
        tmp = tmp.next;
    }
}

printList(list);