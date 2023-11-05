/** ============================================================
 * Type generic contains:
 *      *1. help avoid user pass any type to generic type
 *      *2. "extends keyof T"
* ============================================================*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var obj1 = {
    id: 1,
    name: "Jenny"
};
var obj2 = {
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
function propV2(obj, key) {
    return obj[key];
}
/** ============================================================
 * Create Generic class
* ============================================================*/
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var Fruit = /** @class */ (function () {
    function Fruit() {
    }
    return Fruit;
}());
var Library = /** @class */ (function () {
    function Library() {
    }
    return Library;
}());
var month = {
    key: 2,
    value: "Feb"
};
var inputOptions = {
    'disabled': true,
    'visible': false
};
console.log(inputOptions);
