"use strict"


/**
 * 1. Can't declare global variable
 */
// x = 3.14;
// console.log(x); // throw exception here


/**
 * 2. can't delete object, variable or function
 */
const person = {
    name: "John",
    age: 23
}
let pi = 3.14;

function addTwoNumber(a, b) {
    return a + b;
}
// delete addTwoNumber;
// delete pi;  // throw error
// delete person;  // throw error


// function addTwoNumber(a, a) {   // throw error duplicate parameter
//     return a + b;
// }




