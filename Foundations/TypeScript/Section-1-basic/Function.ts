/** ==============================
 * Function type
 ============================== */

let add: (a: number, b: number) => number;
add = function (x: number, y: number) {
    return x + y;
}

// Inferring function types
let minus = (x: number, y: number): number => {
    return y - x;
}
let resultMinus = minus(10, 100);



/** ==============================
 * Optional parameters and default parameters
 *      1. only set variable at the last in the list
 ============================== */
function optFunction(x: number, y: number, z?: number) {
    if (z != undefined) {
        return x + y + z;
    }
    return x + y;
}

function optFunction2(x: number, y: number, z: number = 100) {
    if (z != undefined) {
        return x + y + z;
    }
    return x + y;
}



/** ==============================
 * Rest parameters
 ============================== */
function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach(e => {
        total += e;
    });
    return total;
}