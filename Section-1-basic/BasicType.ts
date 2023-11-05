/**
 * What is features TypeScript different with JavaScript?
 */


/** ------------------------------------------
 * # Type Annotations
 *      User ":type" after variable
 */

/** ----------------------------
 * # Basic type
 */
let num1: number;
let string1: string;
let bool1: boolean;
let var2 = null;
let var3 = undefined;
let var1: any;
const json = `{"latitude": 10.11, "longitude":12.12}`;
const jsonParse = JSON.parse(json);


/** ----------------------------
 * # "any" with "object" type
 */
let result: any;
result = 10.123;

let result2: object;
result = 10.123;
result.toFixed();


/** ------------------------------------------
 * # Array and Tuple
*/
let myArr: (number | null)[] = [12, 100, null];
let myNum : [number, string, boolean, null] = [12, "Nguyen Thi A", false, null];
let myRgb : [number, number, number] = [12, 128, 45];



/** ------------------------------------------
 * # object Type
 */
let student : {
    studentId: string,
    fullName: string,
    gender: boolean
} = {
    studentId: "STD01",
    fullName: "Le An",
    gender: true
};
let student1: {}; // object without any property
// student1.fullName = "Nguyen A";     // Can't assign new value for new property



/** ------------------------------------------
 * # Enum
 * Note:
 *      1. Enum like an object contain group of constants element.
 *      2. Start with 0, and creasing +1 on each constants.
 *      3. One constants both string and number value.
 *      4. Use enum when need defined a set of value fixed, don't need change on the feature.
 */
enum DayOfWeek {
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat,
    Sun
};


/** ----------------------------
 * # void type
 */
function printHelloWorld(): void {
    console.log("Hello world");
}



/** ----------------------------
 * # never type
 *      1. Can't assign any value for variable have never type
 *      2. Why?: use for the function alway throw error or indefinite loop
 */
let noValue: never;

let loop = function forever() {
    while (true) {
        console.log('Hello');
    }
}



/** -----------------------------
 * # union type
 */
let unionVar : string | number;
unionVar = "Hi";
unionVar = 100;



/** -----------------------------
 * # Type aliases: defined a custom type
 */
type alias = string | number;
type alias1 = undefined | null;

let testAlias: alias = 10000;



/** -----------------------------
 * # String literal types
 *      1. use when you to want limit possible string that variable can contains
 */
type eventList = "click" | "dbClick" | "hover";
let testEventStr: eventList;
testEventStr = "dbClick";