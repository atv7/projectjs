'use strict'

function sumTo(n) {
    let count = 0;
    for (let i = 0; i <= n+1; i++) {
        count += i;
    }
    return count;
}

console.log(sumTo(100));


function sumToRec(n) {
    let count = 0;
    return (n > 1) ? count = n + sumToRec(n-1) : count + 1;
}


console.log(sumToRec(100));

function sumToProgressive(n) {
    let count = 0;
    count = ((1 + n) / 2 ) * n
    return count;
}

console.log(sumToProgressive(100));