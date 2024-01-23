var test = 100;
var test = 1000;

console.log(test);



const PI = 3.14;
// PI = 3.155;
// console.log(PI);


const blackHex = [1, 2, 3];
blackHex[0] = 10;   // change change even don't care declare with const
console.log(blackHex);



const person = {
    name: "Nguyen Van A",
    email: "abc@gmail.com",
};
// person = { // throw error
//     name: "Le Van B",
//     email: "123@gmail.com",
// }
console.log(person.email);
person.email = "def@gmail.com";
console.log("After changes:", person.email);
