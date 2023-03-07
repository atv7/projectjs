"use strict"


const animal = {
    eats: true,
    stop() {
        console.log('stopped');
    },
    lala: () => console.log('lala'),
}

const rabbit = {
    eyes: 'yes',
}

Object.setPrototypeOf(rabbit, animal);

console.log(rabbit.eats);
rabbit.stop();
rabbit.lala();