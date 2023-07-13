// const arrayOfNumbers = [1, 2, 3]; //['1', '2', '3']
// const arrayOfStrings = arrayOfNumbers.map((number) => number.toString());
// // console.log(arrayOfStrings);

// type AreaNumber = {
//     height: number;
//     width: number
// }

// type AreaString = {
//     height: string;
//     width: string;
// }

// type AreaReadOnly = {
//     readonly height: number;
//     readonly width: number
// }

// const rectangularArea: AreaReadOnly = {
//     height: 10,
//     width: 12
// }

// type A = AreaNumber['height'] //look up types
// type B = keyof AreaNumber;  //'width' | 'height'


// type User = {
//     name: string;
//     age: number;
// }

// type UserExtendedType = User & {
//     role: string
// }

// interface IUser {
//     name: string;
//     age: number;
// }



// interface IExtendedUser extends IUser {
//     role: string
// }

// const userWithTypeAlias: UserExtendedType = {
//     name: "Md. Fahad Monshi",
//     age: 24,
//     role: "Regular User"
// }

// const userwithInterface: IExtendedUser = {
//     name: "Md. Fahad Monshi",
//     age: 24,
//     role: "Admin"
// }

// type RollNumber = number;
// // Object, Function, Array

// interface IAddNumbersType {
//     (num1: number, num2: number): number;
// }

// const addNumbers: IAddNumbersType = (num1, num2) => {
//     return num1 + num2;
// }

// interface RollNumberType {
//     [index: number]: number
// }
// const rollNumber: RollNumberType = [1, 2, 3, 4, 5];

// interface IRelationWithSalary {
//     husband: string;
//     wife: string;
// }

// interface RelationWithSalary<T, S> {
//     name: T;
//     salary: S;
// }

// const couple: RelationWithSalary<string, number> = {
//     name: "Md. Fahad Monshi",`  `
//     salary: 1000000
// }

// const touple: RelationWithSalary<IRelationWithSalary, number> = {
//     name: {
//         husband: "Md. Fahad Monshi",
//         wife: 'Future Wife'
//     },
//     salary: 10000
// }