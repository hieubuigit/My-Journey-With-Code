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
var num1;
var string1;
var bool1;
var var2 = null;
var var3 = undefined;
var var1;
var json = "{\"latitude\": 10.11, \"longitude\":12.12}";
var jsonParse = JSON.parse(json);
/** ----------------------------
 * # "any" with "object" type
 */
var result;
result = 10.123;
var result2;
result = 10.123;
result.toFixed();
/** ------------------------------------------
 * # Array and Tuple
*/
var myArr = [12, 100, null];
var myNum = [12, "Nguyen Thi A", false, null];
var myRgb = [12, 128, 45];
/** ------------------------------------------
 * # object Type
 */
var student = {
    studentId: "STD01",
    fullName: "Le An",
    gender: true
};
var student1; // object without any property
// student1.fullName = "Nguyen A";     // Can't assign new value for new property
/** ------------------------------------------
 * # Enum
 * Note:
 *      1. Enum like an object contain group of constants element.
 *      2. Start with 0, and creasing +1 on each constants.
 *      3. One constants both string and number value.
 *      4. Use enum when need defined a set of value fixed, don't need change on the feature.
 */
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["Mon"] = 0] = "Mon";
    DayOfWeek[DayOfWeek["Tue"] = 1] = "Tue";
    DayOfWeek[DayOfWeek["Wed"] = 2] = "Wed";
    DayOfWeek[DayOfWeek["Thu"] = 3] = "Thu";
    DayOfWeek[DayOfWeek["Fri"] = 4] = "Fri";
    DayOfWeek[DayOfWeek["Sat"] = 5] = "Sat";
    DayOfWeek[DayOfWeek["Sun"] = 6] = "Sun";
})(DayOfWeek || (DayOfWeek = {}));
;
/** ----------------------------
 * # void type
 */
function printHelloWorld() {
    console.log("Hello world");
}
/** ----------------------------
 * # never type
 *      1. Can't assign any value for variable have never type
 *      2. Why?: use for the function alway throw error or indefinite loop
 */
var noValue;
var loop = function forever() {
    while (true) {
        console.log('Hello');
    }
};
/** -----------------------------
 * # union type
 */
var unionVar;
unionVar = "Hi";
unionVar = 100;
var testAlias = 10000;
var testEventStr;
testEventStr = "dbClick";
