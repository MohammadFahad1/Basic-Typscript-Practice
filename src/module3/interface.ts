type User = {
    name: string;
    age: number;
} // Type Alias Way

type extendedUser = User & {
    role: string,
}


interface IUser {
    name: string;
    age: number;
} //Interface Way

interface IExtendedUser extends IUser {
    role: string,
}

const user: IExtendedUser = {
    name: 'Omanush',
    age: 2000,
    role: 'Unknown'
}

const userWithTypeAlias: User = {
    name: 'Type Alias',
    age: 100
}

const userWithInterface: IUser = {
    name: 'Interface',
    age: 200
}

// Object, Function, Array

type addNumbersType = (num1: number, num2: number) => number;
interface IAddNumbers {
    (num1: number, num2: number): number;
}

const addNumbers: IAddNumbers = (num1, num2) => num1 + num2;

type rollNumbersType = number[];
interface IRollNumbers {
    [index: number]: number
}
const rollNumbers: IRollNumbers = [1, 2, 3, 4, 5, 6];
