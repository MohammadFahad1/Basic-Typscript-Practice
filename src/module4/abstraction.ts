// interface IVehicle {
//     name: string;
//     model: string;
// }

// const vehicle: IVehicle = {
//     name: 'Car',
//     model: '2000'
// }

// interface Vehicle {
//     startEngine(): void;
//     stopEngine(): void;
    // move?(): void;
// }

// class Car implements Vehicle {
//     constructor(public name: string, public brand: string, public model: number) {

//     }
//     startEngine(): void {
//         console.log(`I am starting the engine`);
//     }
//     stopEngine(): void {
//         console.log(`I am stopping the engine`);
//     }
//     move(): void {
//         console.log(`I am moving the engine`);
//     }
//     test() {
//         console.log(`I am for testing purpose!`);
//     }
// }

// const vehicle1 = new Car("Car", "Toyota", 200000);

// abstract class
// abstract class Vehicle {
//     constructor(public name: string, public brand: string, public model: number) {

//     }
//     abstract startEngine(): void
//     abstract stopEngine(): void
//     move(): void {
//         console.log(`I am moving the engine`);
//     }
// }

// // const car1 = new Vehicle("Car", "Honda", 2015);
// class Car extends Vehicle {
//     startEngine(): void {
//         console.log(`I am starting engine..`);
//     }
//     stopEngine(): void {
//         console.log(`I am stopping engine..`);
//     }
// }

