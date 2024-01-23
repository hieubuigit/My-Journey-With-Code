/**
 * Learn from: https://www.typescripttutorial.net/typescript-tutorial/what-is-typescript/
 */
var msg = "Hello World, Hieu Bui!";
var heading = document.createElement("h1");
heading.textContent = msg;
document.body.appendChild(heading);
/**
 * 1. Why use TypeScript?
 * Have 3 reason to use it:
 * 1. It have many types for TypeScript.
 * 2. Help developer handle multiple error when run time.
 * 3. Apply rich new features before web browser support them. It features like: ES Next
 */
/**
 * 2. Type of TypeScript:
 * 1 kind of type:
 * a. Primitive type
 *      - string
 *      - number
 *      - boolean
 *      - null
 *      - undefined
 *      - symbol
 * b. Object type:
 *      - Function
 *      - Array
 *      - Class
 */
/**
 * 3. Type Annotation
 */
var items = [1, 2, 3, null];
console.log(typeof items);
