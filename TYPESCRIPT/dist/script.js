"use strict";
// enum Direction {
//   up = "UP",
//   dowm = "DOWN",
//   right = "RIGHT",
//   bottom = "BOTTOM",
// }
// console.log(Direction.bottom);
// let a = 15;
// UNION and INTERSECTION Type
//UNION
// let variable: string | null;
// variable = "Pasa";
//INTERSECTION
// let a: number & string;
// type Stdname = {
//   name: string;
// };
// type Stdclass = {
//   cls: number;
// };
// type Student = Stdname & Stdclass;
// let pasa: Student = {
//   name: "Nishant",
//   cls: 22,
// };
// console.log(pasa);
// TYPE ALIASES
// primitive type aliases
// type Meronaame = string;
// const naam: Meronaame = "Pasa";
// reference type aliases
// type Human = {
//   name: string;
//   age: number;
//   isMale: boolean;
// };
// let nameOne: Human = {
//   name: "Dude",
//   age: 11,
//   isMale: true,
// };
// let nameTwo: Human = {
//   name: "Mood",
//   age: 21,
//   isMale: true,
// };
// let nameThree: Human = {
//   name: "Tuut",
//   age: 91,
//   isMale: true,
// };
// Classes
// class Airpod {
//   price = 250000;
//   color = "Red";
//   playmusic() {
//     console.log("Baja Muzic");
//   }
//   switchmode(mode: boolean) {
//     console.log(mode);
//   }
// }
class Remote {
    constructor() {
        this.color = "white";
        this.category = "TV";
        this.temprature = 32;
    }
    switchon(isOn) {
        console.log(`${isOn} right now ${this.temprature}.`);
    }
    switchoff(isOff) {
        console.log(`${isOff} right now ${this.color}.`);
    }
}
