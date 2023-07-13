// class Person {
//     name: string;
//     age: number;
//     address: string;

//     constructor(name: string, age: number, address: string) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }

//     makeSleep(hours: number): string {
//         return `This ${this.name} will sleep for ${hours} hours`;
//     }
// }

// class Student extends Person {
//     constructor(name: string, age: number, address: string) {
//         super(name, age, address)
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
// }

// class Teacher extends Person {
//     designation: string; //different

//     constructor(name: string, age: number, address: string, designation: string) {
//         super(name, age, address)
//         this.name = name;
//         this.age = age;
//         this.address = address;
//         this.designation = designation;
//     }

//     takeClasses(numberOfClass: number): string { //different
//         return `This ${this.name} will take ${numberOfClass} classes`;
//     }
// }

// const student1 = new Student("Md. Fahad Monshi", 24, "3-5 K.P Ghosh Street");
// const teacher1 = new Teacher("Md. Fahad Monshi", 24, "Bangladesh", "Developer");
// console.log(student1.makeSleep(10));
// console.log(teacher1.takeClasses(5));

class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    makeSleep(hours: number): string {
        return `The ${this.name} will sleep ${hours} hours.`;
    }
}

class Student extends Person {
    constructor(name: string, age: number, address: string) {
        super(name, age, address);
        this.name = name;
        this.age = age;
        this.address = address;
    }
}

class Teacher extends Person {
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address);
        this.name = name;
        this.age = age;
        this.address = address;
        this.designation = designation;
    }

    takeClasses(numberOfClass: number): string {
        return `The ${this.name} will take ${numberOfClass} classes.`;
    }
}

const student1 = new Student("Md. Fahad Monshi", 24, "Dhaka, Bangladesh");
const teacher1 = new Teacher("Md. Fahad Monshi", 24, "Dhaka, Bangladesh", "Programmer");

console.log(student1);
console.log(teacher1);