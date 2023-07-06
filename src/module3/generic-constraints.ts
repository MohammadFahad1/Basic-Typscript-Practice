// const newData = { ...myInfo, crush }

interface MandatoryTypes { name: string, age: number, salary: number }
const addMewInMyCrushMind = <T extends MandatoryTypes>(myInfo: T) => {
    const crush = 'Kate Winslate';
    const newData = { ...myInfo, crush };
    return newData;
}

type MyInfoType = {
    name: string;
    age: number;
    salary: number
    other1: boolean,
    other2: null
}

const myInfo: MyInfoType = {
    name: 'Persian',
    age: 100,
    salary: 10000000000000,
    other1: false,
    other2: null
};

const reuslt4 = addMewInMyCrushMind(myInfo);