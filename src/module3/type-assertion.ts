let emni: any;

emni = "Next Level Web Development";

(emni as string).length;

function kgToGram(param: string | number): string | number | undefined {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `The converted result is: ${value} gram`;
    }
    if (typeof param === 'number') {
        const value = param * 1000;
        return value;
    }
}

const resultToBeNumber = kgToGram(1000) as number;
const resultToBeString = <string>kgToGram('1000'); //We can also use type assertion in this way but this syntax wont work in .tsx extension

type CustomErrorType = {
    message: string;
}

try {

}
catch (err) {
    console.log((err as CustomErrorType).message);
}
