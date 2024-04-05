// Prototype
const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

// console.log(myObject);
// console.log(typeof(Object));
// console.log(Object.prototype);

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function (msg) {
  return "Hello " + msg;
}

//Person.prototype.isWorker = false;

console.log("Person prototype: ", Person.prototype);

let personal = new Person("Test");
console.log(Person.prototype);
console.log("instance: ", personal);
console.log(personal.sayHello("Hieu Bui!"));


let personal2 = new Person("John");
personal2.sayMe = () => {
  return "How are you?";
}
console.log(personal2.sayHello("John"));
console.log(personal2.sayMe());

