"use strict"

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