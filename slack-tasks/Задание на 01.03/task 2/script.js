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
        // Здесь я добивался правильного целочисленного деления для отрицательных чисел, к примеру -11 / 4 == -3
        if (this.secondNumber == 0) { throw new Error("Делить на ноль нельзя")}
        let flag = 1;

        if (this.firstNumber < 0) {
            flag *= -1;
            this.firstNumber = this.firstNumber * BigInt(-1);
        }

        if (this.secondNumber < 0) {
            flag *= -1;
            this.secondNumber = this.secondNumber * BigInt(-1);
        }

        let del = BigInt; 
        del = (this.firstNumber / this.secondNumber)
        
        if (flag < 0 && (this.firstNumber % this.secondNumber !== 0)) {
            del += BigInt(1);
        }

        return (BigInt(flag) * del).toString();
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

let test2 = new calculation('-11', '4');
console.log(test2.division());

// export {calculation};