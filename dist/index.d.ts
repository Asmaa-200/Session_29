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
declare function logMessage(): void;
declare function throwError(message: string): never;
declare let x: any;
declare let y: unknown;
declare let user: [string, number];
declare let names: string[];
declare let person: [string, number];
declare let n: string | number;
declare let answer: "A" | "B" | "C";
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
type User = {
    readonly id: number;
    firstName: string;
    lastName: string;
    email?: string;
    password: string;
    isAdmin: boolean;
    getFullName: (firstName: string, lastName: string) => string;
};
declare let newUser: User;
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
declare namespace DynamicTyping {
}
declare namespace InferredTypes {
}
declare namespace ExplicitTypes {
}
//# sourceMappingURL=index.d.ts.map