"use strict"

/*
Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

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
    
// if (list.next) {
//     printList(list.next);
// }

// console.log(list.value);
// }

// printList(list);




function printList(list) {
    let tmp = list

    let reverseList = []
    while(tmp) {
        reverseList.unshift(tmp.value);
        tmp = tmp.next;
    }
    console.log(...reverseList);
}

printList(list);