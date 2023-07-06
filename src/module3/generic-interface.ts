// // Generic Interface
// interface CrushInterface<T, U = null> {
//     name: string,
//     husband: T,
//     wife?: U,
// }

// interface PersonInterface {
//     name: string,
//     age: number
// }

// const crush4: CrushInterface<PersonInterface, PersonInterface> = {
//     name: 'Kate',
//     husband: {
//         name: 'Persian',
//         age: 30
//     },
//     wife: {
//         name: 'Winslate',
//         age: 40
//     }
// }

// const crush1: CrushInterface<boolean, string> = {
//     name: 'Kate Winslate',
//     husband: true,
//     wife: "Sokhina"
// }

// const crush2: CrushInterface<string> = {
//     name: 'Kate Winslate',
//     husband: 'Persian'
// }


// interface HusbandInterface { name: string, salary: number }
// const crush3: CrushInterface<HusbandInterface> = {
//     name: 'Late Winslate',
//     husband: {
//         name: 'Persian',
//         salary: 0.01
//     }
// }


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