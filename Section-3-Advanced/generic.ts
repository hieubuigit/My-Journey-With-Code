/** ============================================================
 * Type generic contains:
 *      *1. help avoid user pass any type to generic type
 *      *2. "extends keyof T"
* ============================================================*/

function merge<U extends object, V extends object>(obj1: U, obj2: V) : U & V {
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
// console.log(merge(obj1, 100));  // will throw error because V only accept object type instead number
// console.log(merge(obj1, obj2));


/**
 *  Use "extends keyof T"
 */
// function prop<T, K>(obj: T, key: K) {
//     return obj[key];    // throw error
// }

function propV2<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}



/** ============================================================
 * Create Generic class
* ============================================================*/

class Employee<T> {
    // Can do anything with T type
}


class Fruit<A, B> {
    // Can do anything with T type
}

interface Book {
    id: string
    pageNum: string
    name: string
}

class Library<A extends Book, B extends keyof Book> {
    // Can do anything with A type and B is a key of A
}




/** ============================================================
 * Create Generic interface
* ============================================================*/
interface Pair<U, V> {
    key: U,
    value: V
}
let month : Pair<number, string> = {
    key: 2,
    value: "Feb"
}
// console.log(month);


/**
 * Generic interface that describe index types
 */
interface Options<T> {
    [name: string]: T
}
let inputOptions: Options<boolean> = {
    'disabled': true,
    'visible': false
};
console.log(inputOptions);



