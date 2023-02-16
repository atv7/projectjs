"use strict"

<<<<<<< HEAD
for (let i = 0; i < 10; i++) {

    // если true, пропустить оставшуюся часть тела цикла
    if (i % 2 == 0) continue;

        console.log(i); // 1, затем 3, 5, 7, 9
  }
=======
let age = 21; // возьмём для примера 16

if (age < 18) {
    welcome(); // \   (выполнится)
    //  |
    function welcome() { //  |
        console.log("Привет!"); //  |  Function Declaration доступно
    } //  |  во всём блоке кода, в котором объявлено
    //  |
    welcome(); // /   (выполнится)

} else {

    function welcome() {
        console.log("Здравствуйте!");
    }

    welcome()
}
>>>>>>> master
