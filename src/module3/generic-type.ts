type GenericTouple<X, Y> = [X, Y]; //Generic Touple

const relation: GenericTouple<string, string> = ['Persian', 'Kate Winslate'];

interface relationWithSalaryType { name: string, salary: number };

const relationWithSalary: GenericTouple<relationWithSalaryType, string> = [{
    name: 'Persian',
    salary: 100000000000
},
    'Kate Winslate'
]

const relationWithSalary2: GenericTouple<relationWithSalaryType, string> = [{
    name: 'Fahad Monshi',
    salary: 10000
},
    'Allah Knows'
]

type GenericArray<T> = Array<T>; //T means Type

// const rollNumbers: Array<number> = [44, 12, 4];
const rollNumbers: GenericArray<number> = [44, 12, 4];
// const rollNumbers2: Array<string> = ['44', '12', '4'];
const rollNumbers2: GenericArray<string> = ['44', '12', '4'];
// const rollNumbers3: Array<boolean> = [true, false];
const rollNumbers3: GenericArray<boolean> = [true, false];

type NameRollType = { name: string, roll: number };

const userNameAndRollNumbers: GenericArray<NameRollType> = [
    {
        name: 'Mr. X',
        roll: 1
    },
    {
        name: 'Mr. Y',
        roll: 2
    }
]