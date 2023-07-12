// type GenericTouple<X, Y> = [X, Y]; //Generic Touple

// const relation: GenericTouple<string, string> = ['Persian', 'Kate Winslate'];

// interface relationWithSalary { name: string, salary: number };

// const relationWithSalary: GenericTouple<relationWithSalary, string> = [{
//     name: 'Persian',
//     salary: 100000000000
// },
//     'Kate Winslate'
// ]

// const relationWithSalary2: GenericTouple<relationWithSalary, string> = [{
//     name: 'Fahad Monshi',
//     salary: 10000
// },
//     'Allah Knows'
// ]

// type GenericArray<T> = Array<T>; //T means Type

// // const rollNumbers: Array<number> = [44, 12, 4];
// const rollNumbers: GenericArray<number> = [44, 12, 4];
// // const rollNumbers2: Array<string> = ['44', '12', '4'];
// const rollNumbers2: GenericArray<string> = ['44', '12', '4'];
// // const rollNumbers3: Array<boolean> = [true, false];
// const rollNumbers3: GenericArray<boolean> = [true, false];

// type NameRollType = { name: string, roll: number };

// const userNameAndRollNumbers: GenericArray<NameRollType> = [
//     {
//         name: 'Mr. X',
//         roll: 1
//     },
//     {
//         name: 'Mr. Y',
//         roll: 2
//     }
// ]


// const rollNumbers: number[] = [44, 12, 4];
// const rollNumbers2: Array<string> = ['44', '12', '4'];
// const rollNumbers3: Array<boolean> = [true, false];

// const userNameAndRollNumbers: Array<{ name: string; roll: number }> = [
//     {
//         name: "Mr. X",
//         roll: 1
//     }
// ]

// function createArray<X, Y>(param1: X, param2: Y) {
//     return [param1, param2];
// }

// const createArray1 = <X, Y>(param1: X, param2: Y) => {
//     return [param1, param2];
// }

// interface Husband {
//     name: string;
//     age: number;
//     salary: number
// }

// const result = createArray<string, Husband>('Kate Winslate', { name: 'Md. Fahad Monshi', salary: 10000, age: 100 })

// const addMeInMyCrushMind = <T>(myInfo: T) => {
//     const crush = "Kate Winslate";
//     const newData = { ...myInfo, crush };
//     return newData;
// }

// const myInfo = {
//     name: 'Persian',
//     age: 100,
//     salary: 1000000
// }
// const result1 = addMeInMyCrushMind<Husband>(myInfo);

// result1.age;
// result1.crush;
// result1.name;
// result1.salary;

// Generic constraints

// const addMeInMyCrushMind = <T extends IMyInfo>(myInfo: T) => {
//     const crush = "Kate Winslate";
//     const newData = { ...myInfo, crush };
//     return newData;
// }

// interface IMyInfo {
//     name: string;
//     age: number;
//     salary: number;
//     other: boolean;
//     other2: null
// }

// const myInfo: IMyInfo = {
//     name: "Persian",
//     age: 100,
//     salary: 100000000,
//     other: false,
//     other2: null
// }

// const result1 = addMeInMyCrushMind(myInfo);

// type PersonType1 = {
//     name: string;
//     age: number;
//     address: string
// };

// type newType1 = "name" | "age" | "address";

// type newTypeUsingKeyOf = keyof PersonType1;

// const aa: newTypeUsingKeyOf = 'age';

// // function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
// //     obj[key];
// // }

// // const property1 = getProperty({
// //     name: "Mr.X",
// //     age: 100
// // }, "age")

// // Moking
// const makePromise = (): Promise<string> => {
//     return new Promise<string>((resolve, reject) => {
//         const data: string = "Data is fetched";
//         if (data) {
//             resolve(data);
//         } else {
//             reject("Failed to fetch data");
//         }
//     })
// }

// const makePromiseBoolean = (): Promise<boolean> => {
//     return new Promise<boolean>((resolve, reject) => {
//         const data: boolean = true;
//         if (data) {
//             resolve(data);
//         } else {
//             reject("Failed to fetch data");
//         }
//     })
// }

// type DataType = {
//     data: string;
// }

// const makePromiseObject = (): Promise<DataType> => {
//     return new Promise<DataType>((resolve, reject) => {
//         const data: DataType = { data: "Data is fetched" };
//         if (data) {
//             resolve(data);
//         } else {
//             reject("Failed to fetch data");
//         }
//     })
// }

// const getPromiseData = async (): Promise<string> => {
//     const data = await makePromise();
//     return data;
// }

// const getPromiseDataBoolean = async (): Promise<boolean> => {
//     const data = await makePromiseBoolean();
//     return data;
// }

// const getPromiseDataObject = async (): Promise<Object> => {
//     const data = await makePromiseObject();
//     return data;
// }

// interface ITodo {
//     userId: number;
//     id: number;
//     title: string;
//     completed: boolean
// }

// // Json placeholder
// const getTodo = async (): Promise<ITodo> => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     return await res.json();
// }

// const getTodoData = async (): Promise<void> => {
//     const result = await getTodo();
//     console.log(result);
// }

// getTodoData();

// Conditional Types
// type a1 = string;
// type a2 = a1 extends string ? string : null;
// type a3 = undefined;
// type a4 = number;

// type d = a1 extends null ? null : a3 extends number ? number : a4 extends null ? null : never;

// type Sheikh = {
//     wife1: string;
//     wife2: string;
// }

// // check ei sheikh type a wife2 ase kina ? true : false

// type CheckProperty<T> = T extends 'wife1' ? true : false;
// type CheckWife1 = CheckProperty<Sheikh>;

// type a1 = null;
// type a2 = a1 extends string ? string : null;

// // nested conditional type
// type a3 = undefined;
// type a4 = number;

// type d = a1 extends null ? null : a3 extends number ? number : a4 extends null ? null : never;

// type Sheikh = {
//     wife1: string;
//     wife2: string;
// }

// // check korbe ei sheikhtype ea wife1 ase kina ? true : false

// type CheckProperty<T, K> = K extends keyof T ? true : false;

// type CheckWife1 = CheckProperty<Sheikh, 'wife1'>;

// const arrayOfNumbers = [1, 2, 3];
// const arrayOfStrings = arrayOfNumbers.map(num => num.toString());

// console.log(arrayOfStrings);

// type AreaNumber = {
//     height: number;
//     width: number;
// }

// type A = AreaNumber['height']

// function getArrayItem<T, K extends keyof T>(arr: T[], index: number, key: K): T[K] {

//     const item = arr[index];

//     return item[key];

//   }



//   const users = [ { name: 'John', age: 30 }, { name: 'Mary', age: 25 },];

//   console.log(getArrayItem(users, 0, 'name'))

// type Data = { num1: number }



// type B = {

//   [key in keyof Data]: string;

// }

// const numbers:B = {

//   num1: 20

// }


interface Person {

    firstName: string;

    lastName: string;

}



function fullName<T extends Person>(person: T): string {

    return `${person.firstName} ${person.lastName}`;

}

fullName({
    firstName: "Md. Fahad",
    lastName: "Munshi"
})