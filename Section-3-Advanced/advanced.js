var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var testColor1 = {
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
var Shoes = /** @class */ (function () {
    function Shoes(shoeId, size, color, price) {
        this.shoeId = shoeId;
        this.size = size;
        this.color = color;
        this.price = price;
    }
    return Shoes;
}());
var Nike = /** @class */ (function (_super) {
    __extends(Nike, _super);
    function Nike(shoeId, size, color, price, material) {
        var _this = _super.call(this, shoeId, size, color, price) || this;
        _this.material = material;
        return _this;
    }
    Nike.prototype.getInfo = function () {
        return "ShoeId: ".concat(this.shoeId, "\n                Size: ").concat(this.size, "\n                Color: ").concat(this.color, "\n                price: ").concat(this.price, "\n                material: ").concat(this.material, "\n                ");
    };
    return Nike;
}(Shoes));
var Adidas = /** @class */ (function (_super) {
    __extends(Adidas, _super);
    function Adidas(shoeId, size, color, price, stringColor) {
        var _this = _super.call(this, shoeId, size, color, price) || this;
        _this.stringColor = stringColor;
        return _this;
    }
    Adidas.prototype.getInfo = function () {
        return "ShoeId: ".concat(this.shoeId, "\n                Size: ").concat(this.size, "\n                Color: ").concat(this.color, "\n                price: ").concat(this.price, "\n                String color: ").concat(this.stringColor, "\n                ");
    };
    return Adidas;
}(Shoes));
/**
 * Use "typeof" keyword
 */
var nike1 = new Nike("NIKE01", "L", "Red", 500000, "nilon");
// console.log(typeof nike1);  // object
// console.log(typeof nike1.price);  // number
/**
 * Use "instanceof" keyword
 */
var shoe01 = new Nike("SHOE01", "S", "Blue", 125000, "cotton");
var shoe02 = new Adidas("SHOE01", "S", "Blue", 125000, "0.95m");
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
function isNike(shoes) {
    return shoes instanceof Nike;
}
// console.log("Is Adidas", isNike(shoe01));
// console.log("Is Nike", isNike(shoe01));
/** ============================================================
 * Type casting to convert a type to another type, to do it use:
 *      1. Use "as"
 *      2. Use "<>"
 * ============================================================*/
var A = /** @class */ (function () {
    function A() {
    }
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return B;
}(A));
var varA = new A();
// console.log(varA.valueB);    // Can't access to valueB
var testTypeB1 = varA;
testTypeB1.valueB = "test with as keyword";
// console.log("valueB = ", testTypeB1.valueB);
var testTypeB2 = varA;
testTypeB2.valueB = "test with <> bracket";
// console.log("valueB = ", testTypeB2.valueB);    // Can't access members after casting type
/** ============================================================
 * Type assertions: to defined a type that compiler know when use union type.
 *      * Main purpose use type assertion is instruct compiler the type that variable will contain
 *      * from function return union type
 * ============================================================*/
function formatMoney(money, isFormat) {
    return isFormat ? "$".concat(money) : money;
}
var testFm1 = formatMoney(12343434, true);
var testFm2 = formatMoney(12909090, false); // Only return number type
var testFm3 = formatMoney(12343434, true);
var testFm4 = formatMoney(12909090, false);
// console.log(testFm2);
/** ============================================================
 * TypeScript generic: help develop reusable function, interface, class with any type.
 *      * 1. user <T> as a type. Can alternative T with another letters like: A, B, C
 *      * 2. can user many type like <U, V>
 * ============================================================*/
function getRandomElement(items) {
    var randomIndx = Math.floor(Math.random() * items.length);
    return items[randomIndx];
}
var arr1 = [1, 4, 8, 9, 5];
var arr2 = ["Anh", "Tu", "An", "Tam", "Hoa"];
// console.log(getRandomElement<number>(arr1));
// console.log(getRandomElement<string>(arr2));
function mergeObj(obj1, obj2) {
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
// console.log(mergeObj(obj1, obj2));
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
