"use strict"

class calculation {

    constructor(firstNumber=0, secondNumber=0) {
        this.firstNumber = BigInt(firstNumber);
        this.secondNumber = BigInt(secondNumber);
    }

    addition() {
        return (this.firstNumber + this.secondNumber).toString();
    }

    subtraction() {
        return (this.firstNumber - this.secondNumber).toString();
    }

    division() {
        return (this.firstNumber / this.secondNumber).toString();
    }

    multiplication() {
        return (this.firstNumber * this.secondNumber).toString();
    }
}

let test = new calculation("89476546456834756834456534456847645473446753688546846465748768876768794955456679568797567889", "11")
console.log(test.addition());
console.log(test.subtraction());
console.log(test.division());
console.log(test.multiplication());

export {calculation};