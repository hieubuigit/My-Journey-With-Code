/** ==============================
 * Function type
 ============================== */
var add;
add = function (x, y) {
    return x + y;
};
// Inferring function types
var minus = function (x, y) {
    return y - x;
};
var resultMinus = minus(10, 100);
/** ==============================
 * Optional parameters and default parameters
 *      1. only set variable at the last in the list
 ============================== */
function optFunction(x, y, z) {
    if (z != undefined) {
        return x + y + z;
    }
    return x + y;
}
function optFunction2(x, y, z) {
    if (z === void 0) { z = 100; }
    if (z != undefined) {
        return x + y + z;
    }
    return x + y;
}
/** ==============================
 * Rest parameters
 ============================== */
function getTotal() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (e) {
        total += e;
    });
    return total;
}
