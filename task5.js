// #5 Give an example to differentiate let, const and var

// var : It can be declared and reassigned multiple times.

var x = 5;
console.log(x); 
var x = 10;
console.log(x);
x = 20;
console.log(x);

// let :　It has the block scope. Can be reassigned but cannot be redeclared.

let y = 30;
console.log(y);

    // this does not work.
// let y = 25;
// console.log(y);

y=38;
console.log(y);

// const : It has block scople, but cannot be reassigned and redeclared.

const z = 39;
console.log(z);

    // This　does not work.

    // const z = 40;
    // z = 45;
        




