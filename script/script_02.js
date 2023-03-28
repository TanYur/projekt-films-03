"use strict";


const solider = {
    health: 400,
    armor: 100,
    sayHello: function(){
        return "Hello";
    }
};

// const jonh = {
//     health: 100
// };

// jonh.__proto__=solider;
// Object.setPrototypeOf(jonh, solider);
const jonh = Object.create(solider);
jonh.sayHello();