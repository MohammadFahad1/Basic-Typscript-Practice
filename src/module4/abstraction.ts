// interface IVehicle {
//     name: string;
//     model: string;
// }

// const vehicle: IVehicle = {
//     name: 'Car',
//     model: '2000'
// }

interface IVehicle {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
}

class vehicle implements IVehicle {
    constructor(public name: string, public brand: string, public model: number) {

    }
    startEngine(): void {
        console.log(`I am starting the engine`);
    }
    stopEngine(): void {
        console.log(`I am stopping the engine`);
    }
    move(): void {
        console.log(`I am moving the engine`);
    }
    test() {
        console.log(`I am for testing purpose!`);
    }
}

const vehicle1 = new vehicle("Car", "Toyota", 200000);