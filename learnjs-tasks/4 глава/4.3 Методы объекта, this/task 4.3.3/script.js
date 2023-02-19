"use strict"

/*
У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:

Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:

Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:


*/

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    console.log( this.step );
    return this;
  }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

let x = ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
