// // Arrow Function
// const createArray = (param: string): string[] => {
//     return [param];
// }

// const createArray1 = <X, Y>(param1: X, param2: Y): [X, Y] => {
//     return [param1, param2];
// }

// function createArray2<X, Y>(param1: X, param2: Y): [X, Y] {
//     return [param1, param2];
// }

// const result = createArray1<string, string>('Bangladesh', 'I Love My Country');
// const result2 = createArray1<boolean, Array<string>>(false, ['USA']);

// interface IName {
//     name: string
// }
// const result3 = createArray1<IName, boolean>({ name: 'Bangladesh' }, false);

// // Spread Operator

// // const newData = { ...myInfo, crush }
// const addMewInMyCrushMind = <T>(myInfo: T) => {
//     const crush = 'Kate Winslate';
//     const newData = { ...myInfo, crush };
//     return newData;
// }

// const myInfo = {
//     name: 'Persian',
//     age: 100,
//     salary: 10000000000000
// };

// const reuslt4 = addMewInMyCrushMind(myInfo);