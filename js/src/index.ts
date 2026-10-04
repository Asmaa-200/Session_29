//! ___________________________________________ TypeScript — Introduction ___________________________________________

/*

 TypeScript is an open-source programming language developed by Microsoft.

* It is a Superset of JavaScript.
* This means that TypeScript contains JavaScript and adds additional features to it.

? The main features added by TypeScript are:
* - A Static Type System
* - Additional features for OOP and code organization

? JavaScript is Dynamically Typed.
* This means that a variable can hold values
* of different types during runtime.

? Example:

let value = 10;
value = "Hello";

? TypeScript allows us to specify the expected type:

let age: number = 20;

? This helps TypeScript detect type-related errors during development.

------------------------------------------------------------------------------------------

? TypeScript also provides features that improve
? code organization and OOP, such as:
     - Interfaces
     - Type Aliases
     - Access Modifiers
     - Abstract Classes
     - Generics

? Note:
* JavaScript already supports OOP.
* TypeScript does not introduce OOP,
* but provides additional features that make
* OOP and large-scale applications easier to organize.

? TypeScript cannot run directly in the browser.
? It must be compiled into JavaScript first.

    TypeScript
        ↓
    Compiler (tsc)
        ↓
    JavaScript
        ↓
    Browser / Runtime

? Main benefits:
    - Type Safety
    - Early Error Detection
    - Better Code Organization
    - Better Autocomplete and IntelliSense
    - Easier Maintenance of Large Applications

*/


//! ________________________________ configuration file for the TypeScript Compiler ________________________________

/*

? tsconfig.json is the configuration file for the TypeScript Compiler.

* It tells the TypeScript Compiler (tsc)
* how to compile and check the TypeScript project.

* It defines the compiler settings,
* so we can control how the compiler works.

* It can define settings such as:
 - The JavaScript version to generate
 - The module system
 - The files/folders to include
 - The files/folders to exclude
 - Type-checking rules
 - Output directory

* We can generate a tsconfig.json file using:
    ? tsc --init

 This command creates a tsconfig.json file
 with the default TypeScript compiler configuration.
*/


//! ___________________________________________ dist folder ___________________________________________

/*

? dist stands for "distribution".

* It is the folder where the compiled JavaScript files
* are generated and stored after TypeScript compilation.

? TypeScript files are usually written inside the src folder.
? After compilation, the generated JavaScript files are stored inside the dist folder.

 Example:
 src/index.ts
     ↓
 TypeScript Compiler (tsc)
     ↓
 dist/index.js

? The dist folder contains the output files,
? not the original TypeScript source files.

 "dist" is just a common naming convention.
 We can use another name such as "build" if we want.

*/


//! ___________________________________________ Module in JavaScript ___________________________________________


/*

? A Module in JavaScript is a separate file
? that contains a specific part of the application code.

* Instead of writing all the application code
* in one large file, we can divide it into multiple modules.

 Each module can handle a specific functionality,
 which makes the code easier to organize, reuse, and maintain.

? A module can share specific variables, functions,
? classes, or other code with other modules using `export`.

? Other modules can use the exported code by importing it
? using `import`.


Application
    │
    ├── users.js     → users related code
    ├── products.js  → products related code
    └── cart.js      → cart related code


? Example:

    math.js
        export function add(a, b) {
            return a + b;
        }

    index.js
        import { add } from './math.js';

        console.log(add(5, 3));


?   `export` makes the `add` function available to other modules.

?   `import` allows `index.js` to use the `add` function from `math.js`.

-------------------------------------------------------

? Before Modules:
? Variables and functions could be available globally,
? so other JavaScript files could access them  without importing them.

? This could cause problems when different files use the same variable or function names.

 This could cause:
 - Too many global variables
 - Name conflicts between files
 - Unwanted access to variables and functions

? Modules solve this by giving each file its own scope.

* A module can share specific code with other files
* using `export` and `import`.

*/


//! ______________________________________________________________________________________________________________________
//! ______________________________________________________________________________________________________________________



/* ----------------------------------------------------------------------------- 
   
What's added by TypeScript compared to JavaScript?
     1. Static type checking
     2. Type annotation and type inference
     3. Type aliases and interfaces
     4. Union and intersection types
     5. Generics
     6. Additional OOP features
     7. Other advanced type features

   ? Important:
    *   - JavaScript already has data types.
    *   - TypeScript adds a static type system that helps detect type-related errors during development.

 */


//! _________________________________________________ 1. DATA TYPES _________________________________________________


/*

* JavaScript Data Types

   TypeScript uses JavaScript's existing data types and adds
   additional types and type-related features.

*  Primitive Data Types (Value Typed):
     number    
     string     
     boolean 
     undefined   -> a value that has not been assigned
     null        -> means there is no value currently.
     bigint      -> very large integers
     symbol      -> unique values

*  Non-Primitive / Object Types (reference Typed):
     object      
     array 
     function 

? ------------------------------------------
*  New in TypeScript?
    - Type declaration (strongly typed vs. loosely typed)
    - Type assertion (casting)
    - Optional parameters
 
 
*  TypeScript Additional / Special Types

    void           -> Represents functions that do not return a value
    any            -> Represents any type (can hold any value)
    unknown        -> Similar to any, but safer because it must be checked before use
    Array<datatype>  -> A collection of values of the same type 
    tuple          -> A fixed-length array with specific types for each position
    union          -> A type that allows a variable to hold multiple types
    intersection  ->   combines multiple types into one
    alias          -> A custom name for a type, making it reusable
    interface      -> Defines the structure of an object, ensuring it has specific properties and types
    literal        -> Allows only specific values



-------------------------------------------------------------------------

* Type Declaration: explicitly specifies the data type of a variable.

* Strongly typed: a variable keeps its declared type and cannot hold another type.

        Example: TypeScript
            let x: number = 20;
            x = "asmaa";  //Error

* Loosely typed: a variable can hold values of different types.
        Example: JavaScript
            let x = 20;
            x = "asmaa"; 
            
*/

//! _________________________________________________ 1.1 Primitive Data Types _________________________________________________

//? -------------------- Number -------------------- 
// number is used for integers and decimal numbers.

let a: number = 1;
let price: number = 99.99;


//? -------------------- String -------------------- 
// string is used to store text.

let b: string = "Asmaa";


//? -------------------- Boolean -------------------- 
// boolean can only be true or false.
// not allowed 0,1  

let c: boolean = true;


//? -------------------- Undefined -------------------- 
// undefined represents a value that has not been assigned.

let d: undefined = undefined;


//? -------------------- Null -------------------- 
// null represents an intentional absence of a value.

let e: null = null;


//? -------------------- BigInt -------------------- 
// bigint is used for very large integer numbers.

let f: bigint = 100n;

/*

* The `n` after an integer determines that the value is a BigInt, not a regular number.

Example:
      let x = 100;  // number
      let y = 100n; // bigint

* When declaring a variable as `bigint`,
* the value must be written with `n`.

let f: bigint = 100n;

Without `n`, the value is a regular number,
so it cannot be assigned to a `bigint` variable.

This gives an error:

let f: bigint = 100; // Error

*/

//? -------------------- Symbol -------------------- 
// symbol is used to create unique values.

let g: symbol = Symbol("id");

//* `"id"` is just a description for the Symbol.
//* It helps us identify what the Symbol is used for.
//* Each Symbol is always unique, even with the same description.

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false


//! _________________________________________________ 1.2 NON-Primitive / Object Types _________________________________________________



//? -------------------- Object Type -------------------- 

let obj1: object = {
    firstName: "asmaa",
    age: 21,
};


//?  Object Structure 
// We can describe the exact structure of an object.

let obj2: {
    name: string;
    age: number;
} = {
    name: "Asmaa",
    age: 21
};


//* Error
// let obj3: object {
//   name: string;
//   age: number;
// } = {
//   name: "Asmaa",
//   age: 21
// };


//? -------------------- Array Type -------------------- 
// An array stores multiple values.

// let arr1: [] = [10, 20, 30, 40];  Error
let arr1: number[] = [10, 20, 30, 40];


//?  Generic Array Syntax  
// `number[]` and `Array<number>` mean the same thing.

let arr2: Array<number> = [10, 20, 30, 40];


//? -------------------- Function Type --------------------

// The type describes its parameters and return value type.

let fun1: () => void = function () { };


//?  Function with Parameters  
// The parameter and return types can be specified.

let add: (a: number, b: number) => number =
    function (a, b) {
        return a + b;
    };

function fun2(): void { };
//! __________________________________________________________________________________________________


//? -------------------- Void Type -------------------- 
// void is mainly used as the return type of a function
// that does not return a useful value.

function logMessage(): void {
    console.log("Logging...");
}

logMessage();



//? -------------------- Never Type -------------------- 
// `never` is used when a function never returns normally.
//
// It is commonly used for functions that:
// - Always throw an error or infinite loop
// - Never finish normally

function throwError(message: string): never {
    throw new Error(message);
}



//? Difference between `void` and `never`:

//* `void` -> The function finishes normally but returns no value.
//* `never` -> The function never finishes normally.


//? -------------------- Any Type --------------------
// 'any' allows a variable to store any type of value.
// TypeScript does not check how the value is used.
// Using 'any' means losing type safety.

//* 'any' can be used when receiving data from an external source
//* and its type is not known.


let x: any = "Hello";

x = 42;
x = true;
x = [1, 2, 3];

// All of the above are allowed.


//? -------------------- Unknown Type -------------------- 
// 'unknown' can hold any type of value.
// Unlike 'any', the value must be checked before using it.

let y: unknown;

y = 42;
y = "Hello";
y = [1, 2, 3];


// ---------- Type Narrowing ---------- 
//* We check the type before using the value.

if (typeof y === "string") {
    console.log(y.toUpperCase());
}



/* -------------------------------------------------
  any vs unknown

*  any:
    -> Anything is allowed.
    -> No type checking.
    -> Less safe.

*  unknown:
    -> Anything can be stored.
    -> Type must be checked before using the value.
    -> Safer than any.
------------------------------------------------- */

//? -------------------- Tuple Type --------------------
// A tuple has a fixed structure.
// A fixed-length array with specific types for each position

let user: [string, number] = ["Asmaa", 21];


//* ---------- Array vs Tuple ---------- 

//* Array: A collection of values.

let names: string[] = ["John", "Ali", "Sara"];


//* Tuple: A fixed structure where each position has a specific type.

let person: [string, number] = ["asmaa", 21];


//? -------------------- Union Type --------------------
// A union allows a variable to hold one of several types.
// The `|` `Pipeline` `Pipe operator` symbol is used.

let n: string | number = "Hello";

n = 42; // Valid


// Error:
// boolean is not part of string | number.

// @ts-expect-error  
n = true;


//? ---------- Literal Union ---------- 
// A union can also restrict a value to specific values.

let answer: "A" | "B" | "C";

answer = "A"; // Valid
answer = "B"; // Valid

// Error:
// "D" is not one of the allowed values.

// @ts-expect-error
answer = "D";

//? `@ts-expect-error` tells TypeScript that
//? the next line is expected to have a type error.

//? TypeScript will hide that expected error.

// ! ____________________________________________________________________________________

//? -------------------- Type Alias --------------------
// `type` gives a custom, reusable name to a type.

type User = {
    readonly id: number;
    firstName: string;
    lastName: string;
    email?: string;
    password: string;
    isAdmin: boolean;
    getFullName?: (firstName: string, lastName: string) => string;
};


let newUser: User = {
    id: 5,
    firstName: "AAAA",
    lastName: "BBBB",
    email: "AAAA@gmail.com",
    password: "123456789",
    isAdmin: true,

    getFullName: (firstName, lastName) => `${firstName} ${lastName}`
};

//! Check if the optional function exists because it may not be present in the user object,
//! which means its value will be `undefined` and calling it directly will cause an error.

if (newUser.getFullName !== undefined) {
    newUser.getFullName('', '');
}


//? ---------- Readonly Property ----------
//* readonly prevents a property from being changed
//* after the object has been created.

// @ts-expect-error
newUser.id = 10;


//? ---------- Optional Property ----------
//* `?` makes a property optional.
//* The property does not have to be provided.

console.log(newUser);



//? -------------------- Intersection Type -------------------- 
// An intersection combines multiple types into one.
// The `&` symbol is used.
//
// The resulting value must satisfy all combined types.

type Person = {
    name: string;
    age: number;
};


type Employee = {
    employeeId: number;
    department: string;
};


type PersonEmployee = Person & Employee;


let employee: PersonEmployee = {
    name: "John",
    age: 25,
    employeeId: 101,
    department: "IT"
};

// or 

// let employee: Person & Employee = {
//     name: "John",
//     age: 25,
//     employeeId: 101,
//     department: "IT"
// };

//? -------------------- Literal Type -------------------- 
// A literal type allows only specific values.

type Direction = "up" | "down" | "left" | "right";


function moveDirection(direction: Direction): void {
    console.log(`Moving ${direction}`);
}


moveDirection("up");
moveDirection("left");


// Error:
// "forward" is not an allowed value.

// @ts-expect-error
moveDirection("forward");


// ! ____________________________________________________________________________________


//? -------------------- Interface --------------------
// An interface describes the structure of an object.
// It defines the properties and their types.
// An interface can contain methods.
// It defines the method signature,
// but does not contain the method implementation.

// An interface is just a description, contract, or structure
// that defines what an object should look like.

interface Human {
    name: string;
    age: number;
    sayHello(): void;
}


let newHuman: Human = {
    name: "asmaa",
    age: 21,
    sayHello: () => {
        console.log('hello');
    }
};


/* -----------------------------------------------------------------------------
  Type Alias vs Interface

  Both can describe the structure of objects.

  `type` can also be used for:
    - Union types
    - Intersection types
    - Primitive types
    - Tuples
    - Other type combinations

  `interface` is mainly used for object structures
  and can be extended or implemented.
----------------------------------------------------------------------------- */

// ! ____________________________________________________________________________________

//? -------------------- Type Inference -------------------- 
// TypeScript can automatically determine the type
// from the assigned value.
{
    let a = 5;
    let b = "Hello";
    let c = true;

    // TypeScript understands:

    // a -> number
    // b -> string
    // c -> boolean

    //*Error
    // a = 'a';
    // b = 5;
    // c = 5;

    //* TypeScript determines the type from the initial value,
    //* so assigning a different type causes an error.

}

//? -------------------- Type Annotation -------------------- 
// We explicitly tell TypeScript the type of a value.
{
    let a: number = 5;
    let b: string = "Hello";
    let c: boolean = true;
}

/* -----------------------------------------------------------------------------
?  Type Inference vs Type Annotation

* Type Inference:
    TypeScript determines the type automatically.

      let age = 20;

* Type Annotation:
    We explicitly specify the type.

      let age: number = 20;
----------------------------------------------------------------------------- */

//? -------------------- Type Assertion / casting --------------------
// Type assertion tells TypeScript to treat a value
// as a specific type.

// It does NOT change the actual value or runtime type.

{
    let userName: unknown = "asmaa";


    //* ---------- Angle Bracket Syntax / Generic ----------
    // Not recommended when using JSX.
    // JSX stands for: JavaScript XML  >> JavaScript + XML-like syntax


    let a: string = <string>userName;

    console.log(a.toUpperCase());


    //* ---------- `as` Syntax ---------- 
    // Recommended syntax, especially with JSX.

    let b: string = userName as string;

    console.log(b.toUpperCase());


    //? ---------- Type Assertion vs Type Conversion ---------- 

    //* Type Assertion:  Tells TypeScript how to treat the value.

    let x: unknown = "123";

    let y = x as number;


    //* Type assertion does NOT convert "123" into 123.
    //* The actual runtime value is still a string.


    //* Type Conversion: Actually converts the value at runtime.

    let z = Number(x);

    // z is actually a number.
}


//? -------------------- Type Narrowing --------------------
// Type narrowing means checking the type of a value
// so TypeScript can determine its more specific type.
{
    let value: string | number = "Hello";


    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }


    //   if (typeof value === "number") {
    //     console.log(value.toFixed(2));
    //   }
}

// ! ____________________________________________________________________________________

//? -------------------- Default Parameter -------------------- */
// A default value is used when the parameter
// is not provided.

function greet(name: string = "Guest"): void {
    console.log(`Hello ${name}`);
}


greet();
greet("Asmaa");



//? -------------------- Optional Parameter -------------------- 
// `?` after the parameter name makes the parameter optional.
//
// If the parameter is not provided,
// its value will be undefined.

function greet2(name: string, age?: number): void {
    console.log(name, age);
}

greet2("Asmaa");
greet2("Asmaa", 21);

// Example:

let students: object[] = [];


function setNewStudent(studentName: string, studentEmail: string, studentPhone?: string): void {

    let newStudent = {
        name: studentName,
        email: studentEmail,
        phone: studentPhone === undefined ? null : studentPhone
    };

    students.push(newStudent);
}

setNewStudent("Asmaa", "As@gmail.com", "011111111111");


setNewStudent("Asmaa", "As@gmail.com");

// ! ____________________________________________________________________________________

//? -------------------- Enum --------------------
// An enum defines a set of named constants.
// By default, enum members start from 0 and increment by 1.
// If a member is assigned a value, the following members continue from that value.
{
    enum Direction {
        Up,         //0
        Down,       //1
        Left = 4,   //4
        Right       //5
    }

    // Direction.Down = 1; reassign not allowed 

    let direction: Direction = Direction.Down;

    console.log(direction, 'enum1');
    // --------------------------------------------------
    enum Direction2 {
        Up = "UP",
        Down = "DOWN",
        Left = "LEFT",
        Right = "RIGHT"
    }

    let direction2: Direction2 = Direction2.Down;

    console.log(direction2, 'enum2');

}

/* -----------------------------------------------------------------------------
  IMPORTANT DIFFERENCES
----------------------------------------------------------------------------- */

/*
any:
  Anything is allowed.
  No type checking.

unknown:
  Anything can be stored.
  Must check the type before using it.

void:
  Function returns no useful value.

never:
  Function never finishes normally.

union `|`:
  OR
  string | number

intersection `&`:
  AND
  Person & Employee

type assertion:
  Tells TypeScript to treat a value as another type.
  Does not convert the actual value.

type conversion:
  Actually changes the value's type at runtime.
----------------------------------------------------------------------------- */

// ! _________________________________________________________________________________________________________________________________________
// !                                                    Object-Oriented Programming (OOP)
// ! _________________________________________________________________________________________________________________________________________

/*

*  OOP is a programming paradigm based on objects.

Main Topics:
1.  OOP Introduction
2.  Class
3.  Object
4.  Constructor
5.  Destructor
6.  Access Modifier / Access Specifier
7.  Parameter Properties
8.  Encapsulation
9.  Getter & Setter
10. Static Method & Static Property
11. Inheritance
12. Multilevel Inheritance
13. Multiple Inheritance
14. Polymorphism
15. Interface
16. Abstract Class

*/

//!   1. OOP Introduction
/*

*  What is Procedural Programming?
    - A programming paradigm based mainly on functions/procedures.
    - The program is divided into functions, where each function performs a specific task.
    - It mainly focuses on How to do something.

  Example:
    C mostly follows the procedural programming paradigm.


*  What is OOP?
    - OOP stands for Object-Oriented Programming.
    - It is based on objects.
    - Objects combine:
        1. Data       -> Properties
        2. Behavior   -> Methods

*    - OOP focuses more on WHAT an object represents.

  Example:
    Student
      Properties -> name, age, GPA
      Methods    -> study(), play()


*  Why use OOP?
    - Organizes large projects.
    - Makes code reusable.
    - Reduces code duplication (DRY).
    - Makes code easier to maintain and modify.
    - Makes code easier to debug.
    - Models real-world entities using objects and classes.
*/


// !  2. Class & Object
/* 

* class name preferred capitalize

*  Class:
    - A blueprint / template for creating objects.
    - Defines the properties and methods that objects can have.

*  Object:
    - An instance of a class.
    - It is created using the `new ` keyword.


*  Class  = Blueprint
*  Object = Actual thing created from the blueprint


  Example:
 
  class : student
  objects:
          stud1,stud2

*    Both objects have the same structure,
*    but each object has its own data.

*/

class Student {

    //* Properties
    public name: string = "";
    public age: number = NaN;
    public gender: string = "";

    //* Method
    public study(): void {
        console.log(this.name + " studying.");
    }

    public learn(): void {
        console.log(this.name + " learning");
    }

    public play(): void {
        console.log(this.name + " playing.");
    }
}


//? Creating objects from the Student class

let student_1: Student = new Student();

student_1.name = "Asmaa";
student_1.age = 21;
student_1.gender = "Female";


let student_2: Student = new Student();

student_2.name = "Aya";
student_2.age = 20;
student_2.gender = "Female";


//? Each object has its own data
console.log(student_1.name); // Asmaa
console.log(student_2.name);   // Aya 


//? Both objects can use the same methods
student_1.study(); // Asmaa studying.
student_2.study(); // Aya studying.



// * NOTE:
// *      `new Student()` creates a new object (instance) from the Student class.


// !    3. Constructor

/*

*  What is a Constructor?
    - A constructor is a special method inside a class.
    - It is automatically called when an object is created.
    - It is mainly used to initialize object properties.

*  Syntax:

      constructor(parameters) {
          initialization
      }


*  Important:
    - A TypeScript class can have only ONE constructor.
    - Constructor overloading is NOT directly supported 
        because overloading not exist in JS ; another constructor would overwrite the previous one.
   
    - The constructor is called automatically when using `new`.
    * A constructor does NOT have a return type.
    * The constructor name must always be `constructor`.
    - The constructor can receive parameters.
    - Constructor parameters can be used to initialize class properties.

    * If no constructor is defined, TypeScript provides a default constructor.
    
    - A constructor can have access modifiers such as `public`, `private`,
      and `protected` when used with parameter properties.

 */

// *  Example:

class Person1 {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

//     - `new Person(...)` creates a new object.
//     - The constructor runs automatically.
//     - The passed values are assigned to the object's properties.

let person1 = new Person1("Asmaa", 20);

/*
NOTE:

* `this` refers to the current object.

 Example:

     this.name = name;

     this.name
*         -> property of the current object

     name
*         -> parameter received by the constructor
*/


//? ------------------------------------------------------------

//*    Constructor Parameter Properties:
//        - TypeScript allows parameters to be automatically converted into
//           class properties using `public`, `private`, `protected`, or `readonly`.

class Person2 {
    constructor(public name: string, private age: number) { }
}

// - This is a shorter way of declaring and initializing properties.


// !    4. Destructor

/*

*  A destructor is used in some languages to perform cleanup
*  when an object is destroyed.

*  TypeScript / JavaScript:
*    - Does NOT support destructors like C++.
?    - JavaScript uses Garbage Collection to automatically
?      clean objects that are no longer reachable.

*  Therefore:
*      Destructor -> NOT supported in TypeScript
*/


// !  5. Access Modifiers / Access Specifiers

/* 

*  Access modifiers control where class members
*  (properties and methods) can be accessed.

*  TypeScript has three main access modifiers:

    - public
    - private
    - protected

*  public:
*    - Can be accessed from anywhere.
*    - It is the DEFAULT access modifier in TypeScript.

*  private:
*    - Can only be accessed inside the same class.

*  protected:
*    - Can be accessed inside the class and its child classes (classes that extend it).
*    - Cannot be accessed directly from outside the class.

*/


// !   6. Parameter Properties

/* 

*  Parameter Properties are a TypeScript shorthand.

*  Instead of:

    class Student {

        public name: string;
        public age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }


*  We can write:

    constructor(
        public name: string,
        public age: number
    ) {}


*  TypeScript automatically:
*    1. Creates the properties.
*    2. Assigns the constructor parameters to them.


*  Supported modifiers:
    - public
    - private
    - protected
    - readonly

*/

// * Example

class Student3 {

    public constructor(
        public name: string,
        public age: number,
        public gender: string
    ) { }
}


let student3 = new Student3("Asmaa", 21, "Female");

console.log(student3.name);
console.log(student3.age);
console.log(student3.gender);


/*
* The previous code is equivalent to:

class Student {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

*/

// !   7. Encapsulation
/* 

?    - Encapsulation means hiding the internal details of an
?      object and controlling how its data is accessed.

?    - Instead of allowing direct access to sensitive data,
?      we control access through methods or getters/setters.

*  In TypeScript, encapsulation is commonly achieved using:
    - private
    - protected
    - getter
    - setter

*  Example:
    private age

*  The outside code cannot directly change age.
*  We can instead use a method that validates the value.

*/

class StudentEncapsulation {

    private name: string = "";
    private age: number = NaN;

    //? Set the student's name
    public setName(name: string): void {
        this.name = name;
    }

    //? Get the student's name
    public getName(): string {
        return this.name;
    }

    //? Set the student's age with validation
    public setAge(age: number): void {

        if (age > 0) {
            this.age = age;
        }
        else {
            console.error("Age must be a positive number.");
        }
    }

    //? Get the student's age
    public getAge(): number {
        return this.age;
    }
}


let student4 = new StudentEncapsulation();

student4.setName("Asmaa");
student4.setAge(20);

console.log(student4.getName()); // Asmaa
console.log(student4.getAge());  // 20


/*
WHY is this useful?

* Without encapsulation:

    student.age = -100;

    Invalid data can be assigned.

* With encapsulation:

    student.setAge(-100);

    The class can validate the value first.


* NOTE:
    - TypeScript checks `private` and `protected` during compilation.
    - These restrictions are mainly for TypeScript's type checking.
    - JavaScript does not enforce them at runtime.

    - JavaScript `#private` fields cannot be accessed from outside the class.


    class Person {
        #name = "Asmaa";
        age = 20;
    
        showName() {
            console.log(this.#name);
        }
    }
    
    const person = new Person();
    person.showName(); // Asmaa
    console.log(person.#name); //Error

    * `const` prevents reassigning the variable, but the object itself can still be modified.
   
        person = new Person(); //Error
        person.age = 20; // possible
*/

// !   8. Getter & Setter
/* 

*  TypeScript provides `get` and `set` keywords.
*
*  Getter:
*    - Used to READ a value.
*
*  Setter:
*    - Used to MODIFY a value.
*
*
*  Syntax:
*
*      get propertyName(): type {
*          return value;
*      }
*
*      set propertyName(value: type) {
*          // update value
*      }
*
*
*  Main advantage:
*    - We can access the value like a normal property.
*    - We can still control the reading/writing process.
*/

class Student5 {

    public constructor(
        private _name: string,
        private _age: number
    ) { }

    //? Setter
    public set name(newName: string) {
        this._name = newName;
    }

    //? Getter
    public get name(): string {
        return this._name;
    }

    //? Setter with validation
    public set age(newAge: number) {

        if (newAge > 0) {
            this._age = newAge;
        }
    }

    //? Getter
    public get age(): number {
        return this._age;
    }
}


let student5 = new Student5("Asmaa", 20);


//? Setter is called automatically
student5.name = "aaaaaa";
student5.age = 21;


//? Getter is called automatically
console.log(student5.name); // aaaaaa
console.log(student5.age);  // 21


/*
* IMPORTANT:
*
* We do NOT write:
*
*     student5.name()
*
* Because `name` is a getter/setter property.
*
* We write:
*
*     student5.name
*     student5.name = "AAAAAAAA"
*
*
* Getter:
*     student5.name
*
* Setter:
*     student5.name = "AAAAAAAA"
*/


//! OR


class Student6 {

    public constructor(
        private _name: string,
        private _age: number
    ) { }

    //? Setter
    public setName(newName: string) {
        this._name = newName;
    }

    //? Getter
    public getName(): string {
        return this._name;
    }
}


let student6 = new Student6("Asmaa", 20);

student6.setName('aaaaaa');

console.log(student6.getName()); // aaaaaa



