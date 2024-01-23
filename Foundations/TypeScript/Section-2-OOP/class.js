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
/** ==============================
 * Create class and use them
 ============================== */
var Person = /** @class */ (function () {
    function Person(_id, _fullName, _birthday, _phoneNumber, _gender) {
        this._id = _id;
        this._fullName = _fullName;
        this._birthday = _birthday;
        this._phoneNumber = _phoneNumber;
        this._gender = _gender;
        this._id = _id;
        this._fullName = _fullName;
        this._birthday = _birthday;
        this._phoneNumber = _phoneNumber;
        this._gender = _gender;
    }
    Object.defineProperty(Person.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (name) {
            this._fullName = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthday", {
        get: function () {
            return this._birthday;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "phoneNumber", {
        // set birthday(birthDate: Date) {  // Can assign value because declare with "readonly"
        //     this._birthday = birthDate;
        // }
        get: function () {
            return this._phoneNumber;
        },
        set: function (phoneNumber) {
            this._phoneNumber = phoneNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        set: function (gender) {
            this._gender = gender;
        },
        enumerable: false,
        configurable: true
    });
    // default public access
    Person.prototype.getPersonInformation = function () {
        return "\n            id = ".concat(this._id, ",\n            full name = ").concat(this._fullName, ",\n            birthday = ").concat(this._birthday, ",\n            phone number = ").concat(this._phoneNumber, ",\n            gender = ").concat(this._gender ? "male" : "female", ",\n        ");
    };
    return Person;
}());
/** ============================================================
 * Use "abstract" keyword:
 *      1. Once time set abstract to properties of class have to use it on class. With method abstract it don't have any body;
 *      2. Can't create instance form abstract class
 *      3. Can implement one and multiple abstract classes into one subclass
 *      4. Once time implement use have to define body of function at subclass
 * ============================================================*/
var GeneralBehavior = /** @class */ (function () {
    function GeneralBehavior() {
    }
    return GeneralBehavior;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(id, fullName, birthday, phoneNumber, gender, bankCard, schoolName) {
        var _this = _super.call(this, id, fullName, birthday, phoneNumber, gender) || this;
        _this._bankCard = bankCard;
        _this._schoolName = schoolName;
        return _this;
    }
    Student.prototype.moneyForBonus = function (score) {
        return score;
    };
    Student.prototype.calAvgScore = function () {
        var subjectScore = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            subjectScore[_i] = arguments[_i];
        }
        return -1;
    };
    Object.defineProperty(Student.prototype, "bankCard", {
        get: function () {
            return this._bankCard;
        },
        set: function (bankCard) {
            this._bankCard = bankCard;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "schoolName", {
        get: function () {
            return this._schoolName;
        },
        set: function (name) {
            this._schoolName = name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Overriding function of base class
     * @returns string that contain student information
     */
    Student.prototype.getPersonInformation = function () {
        return "\n            ".concat(_super.prototype.getPersonInformation.call(this), "\n            career = Student at ").concat(this.schoolName, "\n        ");
    };
    Student.getRank = function () {
        return this.rank;
    };
    Student.prototype.calculateScore = function () {
        return 0;
    };
    Student.rank = "Beginner";
    Student.className = "Class A";
    return Student;
}(Person));
var UniversityStudent = /** @class */ (function (_super) {
    __extends(UniversityStudent, _super);
    function UniversityStudent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UniversityStudent.prototype.getObjectAsString = function () {
        return "Student from university";
    };
    return UniversityStudent;
}(GeneralBehavior));
var person1 = new Person("P01", "Nguyen Van A", new Date(1999, 5 - 1, 13), "0968776812", true);
person1.id = "P02";
var id = person1.id; // P02
var student1 = new Student("P01", "Nguyen Van B", new Date(1999, 5 - 1, 13), "0968776812", true, "bank1", "school1");
// console.log(student1.getPersonInformation());       // Override base function
// console.log(Student.rank);
// console.log(student1.calAvgScore());
/** ==============================
 * Test interface and type
 * ==============================*/
var testFunctionType;
testFunctionType = function (str, isUpper) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
var testBook;
testBook = function (str, isUpper) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
// console.log(testBook("Hieu Book", false));
/** ==============================
 * Learn how to use "static" keyword
 *      1. Use for all instance without create new instance
 *      2. Can change value of properties that declare with "static" keyword
 *      3. Can use static for properties or method
 * ==============================*/
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
