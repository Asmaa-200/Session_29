declare let a: number;
declare let price: number;
declare let b: string;
declare let c: boolean;
declare let d: undefined;
declare let e: null;
declare let f: bigint;
declare let g: symbol;
declare let id1: symbol;
declare let id2: symbol;
declare let obj1: object;
declare let obj2: {
    name: string;
    age: number;
};
declare let arr1: number[];
declare let arr2: Array<number>;
declare let fun1: () => void;
declare let add: (a: number, b: number) => number;
declare function fun2(): void;
declare function logMessage(): void;
declare function throwError(message: string): never;
declare let x: any;
declare let y: unknown;
declare let user: [string, number];
declare let names: string[];
declare let person: [string, number];
declare let n: string | number;
declare let answer: "A" | "B" | "C";
type User = {
    readonly id: number;
    firstName: string;
    lastName: string;
    email?: string;
    password: string;
    isAdmin: boolean;
    getFullName?: (firstName: string, lastName: string) => string;
};
declare let newUser: User;
type Person = {
    name: string;
    age: number;
};
type Employee = {
    employeeId: number;
    department: string;
};
type PersonEmployee = Person & Employee;
declare let employee: PersonEmployee;
type Direction = "up" | "down" | "left" | "right";
declare function moveDirection(direction: Direction): void;
interface Human {
    name: string;
    age: number;
    sayHello(): void;
}
declare let newHuman: Human;
declare function greet(name?: string): void;
declare function greet2(name: string, age?: number): void;
declare let students: object[];
declare function setNewStudent(studentName: string, studentEmail: string, studentPhone?: string): void;
declare class Student {
    name: string;
    age: number;
    gender: string;
    study(): void;
    learn(): void;
    play(): void;
}
declare let student_1: Student;
declare let student_2: Student;
declare class Person1 {
    name: string;
    age: number;
    constructor(name: string, age: number);
}
declare let person1: Person1;
declare class Person2 {
    name: string;
    private age;
    constructor(name: string, age: number);
}
declare class Student3 {
    name: string;
    age: number;
    gender: string;
    constructor(name: string, age: number, gender: string);
}
declare let student3: Student3;
declare class StudentEncapsulation {
    private name;
    private age;
    setName(name: string): void;
    getName(): string;
    setAge(age: number): void;
    getAge(): number;
}
declare let student4: StudentEncapsulation;
declare class Student5 {
    private _name;
    private _age;
    constructor(_name: string, _age: number);
    set name(newName: string);
    get name(): string;
    set age(newAge: number);
    get age(): number;
}
declare let student5: Student5;
declare class Student6 {
    private _name;
    private _age;
    constructor(_name: string, _age: number);
    setName(newName: string): void;
    getName(): string;
}
declare let student6: Student6;
//# sourceMappingURL=index.d.ts.map