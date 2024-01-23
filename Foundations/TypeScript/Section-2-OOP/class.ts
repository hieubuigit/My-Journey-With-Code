/** ==============================
 * Create class and use them
 ============================== */
class Person {
    protected socialId: string;
    constructor(
        private _id: string,
        private _fullName: string,
        private readonly _birthday: Date,
        private _phoneNumber: string,
        private _gender: boolean,
    ) {
        this._id = _id
        this._fullName = _fullName
        this._birthday = _birthday
        this._phoneNumber = _phoneNumber
        this._gender = _gender
    }

    get id() {
        return this._id;
    }

    set id(id: string) {
        this._id = id;
    }

    get fullName() {
        return this._fullName;
    }

    set fullName(name: string) {
        this._fullName = name;
    }

    get birthday() {
        return this._birthday;
    }

    // set birthday(birthDate: Date) {  // Can assign value because declare with "readonly"
    //     this._birthday = birthDate;
    // }

    get phoneNumber() {
        return this._phoneNumber;
    }

    set phoneNumber(phoneNumber: string) {
        this._phoneNumber = phoneNumber;
    }

    get gender() {
        return this._gender;
    }

    set gender(gender: boolean) {
        this._gender = gender;
    }

    // default public access
    getPersonInformation(): string {
        return `
            id = ${this._id},
            full name = ${this._fullName},
            birthday = ${this._birthday},
            phone number = ${this._phoneNumber},
            gender = ${this._gender ? "male" : "female"},
        `;
    }
}



/** ============================================================
 * Use "abstract" keyword:
 *      1. Once time set abstract to properties of class have to use it on class. With method abstract it don't have any body;
 *      2. Can't create instance form abstract class
 *      3. Can implement one and multiple abstract classes into one subclass
 *      4. Once time implement use have to define body of function at subclass
 * ============================================================*/
abstract class GeneralBehavior {
    abstract getObjectAsString() : string;
}



/** ============================================================
 * Use "interface" keyword
 *      1. Use like abstract but you can implement any interface, and number of interface
 *      2. Can use to defined a new type for an object or an function
 * ============================================================*/
interface HighStudent {
    className: string,
    GPA: number
}

interface Calculate {
    calAvgScore(...subjectScore): number;
}

interface Bonus {
    moneyForBonus(score: number, hStdInfo: HighStudent): number;
}

interface StringFormat {
    (str: string, isUpper: boolean) : string;
}


class Student extends Person implements Calculate, Bonus {
    private _bankCard: string
    private _schoolName: string
    static readonly rank: string = "Beginner"
    static className: string = "Class A"

    constructor(
        id: string,
        fullName: string,
        birthday: Date,
        phoneNumber: string,
        gender: boolean,
        bankCard: string,
        schoolName: string) {
        super(id, fullName, birthday, phoneNumber, gender);
        this._bankCard = bankCard;
        this._schoolName = schoolName;
    }

    moneyForBonus(score: number): number {
        return score;
    }

    calAvgScore(...subjectScore: any[]): number {
        return -1;
    }

    get bankCard() {
        return this._bankCard;
    }

    set bankCard(bankCard: string) {
        this._bankCard = bankCard;
    }

    get schoolName() {
        return this._schoolName;
    }

    set schoolName(name: string) {
        this._schoolName = name;
    }

    /**
     * Overriding function of base class
     * @returns string that contain student information
     */
    getPersonInformation(): string {
        return `
            ${super.getPersonInformation()}
            career = Student at ${this.schoolName}
        `;
    }

    static getRank() {
        return this.rank;
    }

    calculateScore(): number {
        return 0;
    }

    // calculateScore(scoreA: string, ...subject: number[]) : number {
    //     let total = 0;
    //     let count = 0;
    //     subject.forEach(ele => {
    //         total += ele;
    //         count += 1;
    //     });
    //     return total / count;
    // }
}

class UniversityStudent extends GeneralBehavior {
    getObjectAsString(): string {
        return `Student from university`;
    }
}


let person1 = new Person("P01", "Nguyen Van A", new Date(1999, 5 - 1, 13), "0968776812", true);
person1.id = "P02";
const { id } = person1;     // P02

let student1 = new Student("P01", "Nguyen Van B", new Date(1999, 5 - 1, 13), "0968776812", true, "bank1", "school1");
// console.log(student1.getPersonInformation());       // Override base function
// console.log(Student.rank);
// console.log(student1.calAvgScore());



/** ==============================
 * Test interface and type
 * ==============================*/
let testFunctionType : StringFormat;
testFunctionType = function(str: string, isUpper: boolean) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
}
// console.log(testFunctionType("Hieu Bui", true));

type Book = (str: string, isUpper: boolean) => string;
let testBook : Book;
testBook = function (str: string, isUpper: boolean) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
}
// console.log(testBook("Hieu Book", false));




/** ============================================================
 * Learn how to use "static" keyword
 *      1. Use for all instance without create new instance
 *      2. Can change value of properties that declare with "static" keyword
 *      3. Can use static for properties or method
 * ============================================================*/
// console.log(Student.className); // Class A
Student.className = "Class B";
// console.log(Student.className);     // output: Class B
// console.log(Student.getRank());




/** ============================================================
 * Use "readonly" keyword
 *      1. Only work for primitive type, with object type it not work when change properties
 *      2. readonly vs const: readonly use for properties in class and const use for variable
 ============================================================ */
// person1.birthday = new Date(1998, 9, 9);    // Throw error here
// person1.birthday.setMonth(10 - 1);
// console.log(person1.birthday.toString());




/** ============================================================
 * Extend interface:
 *      1. One interface and extend other one or multiple interface.
 *      2. One interface can extend from a class. can inherit all private, protected and public properties or methods.
 *         This interface only implement to the class or subclass which the class it extended.
 * ============================================================*/
interface Mailable {
    send(email: string): boolean;
    queue(email: string): boolean;
}

interface FutureMail extends Mailable {
    later(email: string, after: number): void
}

class Control {
    private state: boolean;
}

interface StatefulButton extends Control {
    enable(): void;
}

class Button extends Control implements StatefulButton {
    enable(): void {
        console.warn("Button");
    }
}

class Cursor extends Control implements StatefulButton {
    enable(): void {
        console.warn("Cursor");
    }
}

// class Events implements StatefulButton {    // Throw error here
//     enable(): void {
//         throw new Error("Method not implemented.");
//     }
// }

/**
 * Class A: can implement 3 function from Maiable and FutureMail interface
 */
class TestA implements Mailable, FutureMail {
    later(email: string, after: number): void {
        throw new Error("Method not implemented.");
    }
    send(email: string): boolean {
        throw new Error("Method not implemented.");
    }
    queue(email: string): boolean {
        throw new Error("Method not implemented.");
    }
}









