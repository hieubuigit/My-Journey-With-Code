/** ============================================================
 * Intersection type
 *      1. use & to combine multiple types.
 *      2. type order doesn't matter.
 * ============================================================*/
type rgb = {
    red: number,
    blue: number,
    green: number
}

type offset = {
    x: number,
    y: number
}

type Color = rgb & offset;

const testColor1: Color = {
    red: 10,
    blue: 20,
    green: 100,
    x: 0.9,
    y: 10
};


/** ============================================================
 * Use type guard
 *      1. typeof
 *      2. instanceof
 *      3. in
 * ============================================================*/
abstract class Shoes {
    shoeId: string;
    size: string;
    color: string;
    price: number;
    constructor(
        shoeId: string,
        size: string,
        color: string,
        price: number
    ) {
        this.shoeId = shoeId
        this.size = size
        this.color = color
        this.price = price
    }
    abstract getInfo();
}

class Nike extends Shoes {
    material: string;
    constructor(
        shoeId: string,
        size: string,
        color: string,
        price: number,
        material: string
    ) {
        super(shoeId, size, color, price);
        this.material = material;
    }
    getInfo(): string {
        return `ShoeId: ${this.shoeId}
                Size: ${this.size}
                Color: ${this.color}
                price: ${this.price}
                material: ${this.material}
                `
    }
}

class Adidas extends Shoes {
    stringColor: string;

    constructor(
        shoeId: string,
        size: string,
        color: string,
        price: number,
        stringColor: string
    ) {
        super(shoeId, size, color, price);
        this.stringColor = stringColor;
    }
    getInfo(): string {
        return `ShoeId: ${this.shoeId}
                Size: ${this.size}
                Color: ${this.color}
                price: ${this.price}
                String color: ${this.stringColor}
                `
    }
}

/**
 * Use "typeof" keyword
 */
let nike1: Nike = new Nike("NIKE01", "L", "Red", 500000, "nilon");
// console.log(typeof nike1);  // object
// console.log(typeof nike1.price);  // number


/**
 * Use "instanceof" keyword
 */
let shoe01: Shoes = new Nike("SHOE01", "S", "Blue", 125000, "cotton");
let shoe02: Shoes = new Adidas("SHOE01", "S", "Blue", 125000, "0.95m");
// console.log(shoe01 instanceof Adidas);  // false
// console.log(shoe02 instanceof Adidas);  // true


/**
 * Use "in" keyword to check member had in instance of object
 */
// console.log("getInfo" in nike1);    //true
// console.log("stringColor" in shoe01);    //false
// console.log("stringColor" in shoe02);    //true


/**
 * Use "is" keyword is check argument pass into function whatever is a kind of shoe
 */
function isNike(shoes: any): shoes is Nike {
    return shoes instanceof Nike;
}
// console.log("Is Adidas", isNike(shoe01));
// console.log("Is Nike", isNike(shoe01));




/** ============================================================
 * Type casting to convert a type to another type, to do it use:
 *      1. Use "as"
 *      2. Use "<>"
 * ============================================================*/
class A {
    valueA: string
}

class B extends A {
    valueB: string;
}

let varA = new A();
// console.log(varA.valueB);    // Can't access to valueB

let testTypeB1 = varA as B;
testTypeB1.valueB = "test with as keyword";
// console.log("valueB = ", testTypeB1.valueB);

let testTypeB2 = <B> varA;
testTypeB2.valueB = "test with <> bracket";
// console.log("valueB = ", testTypeB2.valueB);    // Can't access members after casting type





/** ============================================================
 * Type assertions: to defined a type that compiler know when use union type.
 *      * Main purpose use type assertion is instruct compiler the type that variable will contain
 *      * from function return union type
 * ============================================================*/
function formatMoney(money: number, isFormat: boolean) : number | string {
    return isFormat ? `$${money}` : money;
}

let testFm1 = formatMoney(12343434, true) as string;
let testFm2 = formatMoney(12909090, false) as string;   // Only return number type

let testFm3 = <string> formatMoney(12343434, true);
let testFm4 = <number> formatMoney(12909090, false);

// console.log(testFm2);



/** ============================================================
 * TypeScript generic: help develop reusable function, interface, class with any type.
 *      * 1. user <T> as a type. Can alternative T with another letters like: A, B, C
 *      * 2. can user many type like <U, V>
 * ============================================================*/
function getRandomElement<T>(items: T[]) : T {
    let randomIndx = Math.floor(Math.random() * items.length);
    return items[randomIndx];
}
let arr1 = [1, 4, 8, 9, 5];
let arr2 = ["Anh", "Tu", "An", "Tam", "Hoa"];

// console.log(getRandomElement<number>(arr1));
// console.log(getRandomElement<string>(arr2));


function mergeObj<U, V>(obj1: U, obj2: V) : U & V {
    return {
        ...obj1,
        ...obj2
    }
}
let obj1 = {
    id: 1,
    name: "Jenny"
};

let obj2 = {
    red: 1,
    blue: 10,
    green: 100,
};
// console.log(mergeObj(obj1, obj2));

