// 01 - PRIMITIVES

// types: number, string, boolean, null, undefined, any, object

let age: number = 5;
const firstName: string = "Victoria";

console.log(firstName);

const id: string | number = 5;

// 02 - ARRAYS

const arr: number[] = [1, 2, 3, 4, 5];
const arr1: Array<number> = [1, 2, 3, 4, 5];  //дженерик
const arr2: (number | string)[] = [1, 2, 'sfd']; //bad
const temps: readonly number[] = [23, 34, 25, 30];  //can't temps.push(33) (can't change temps)
const coords: [number, number] = [50.341, 30.53463] //ex: rgb, coodinate (This is tuple)

let obj: any = {x: 10}; //bad
obj = 100;
obj = "string";

const user: object = {}  //bad


// 03 - TYPES

type ID = number;
const userId: ID = 123;

type Coords = [number, number];  // тип записується з великої літери
const coordinates: Coords = [50.4567, 23.4567];

// union (в змінній зберігається множина значень, тобто змінна може дорівнювати лише одному із значень в переліку)
// використовують для примітивних типів

type ReqStatus = 'request' | 'success' | 'error';
const requestStatus: ReqStatus = 'success';

//04 - INTERFACES
// використовують для опису об'єктів

interface PluginConfig {
    readonly selector: string;
    startIndex: number;
    draggable?: boolean;  // ? - означає, що ця властивість не обов'язкова (її відсутність в об'єкті не буде помилкою)
}

const config: PluginConfig = {
    selector: 'plugin-1',
    startIndex: 0,
    draggable: true,
}

// or

// const config: PluginConfig = {
//     selector: 'plugin-1',
//     startIndex: 0,
// }

//якщо не відомо завчасно кількість властивостей об'єкта

interface Employees {
    [key: string]: number;
}

const employees: Employees = {
    mango: 5,
    poly: 45,
    ajax: 12,
}

//наслідування

interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square: Square = {
    color: 'red',
    sideLength: 10,
}

//05 - ENUM

enum PizzaSize {
    Small,
    Medium,
    Large,
}

console.log(PizzaSize.Small)  //0

//or

// enum PizzaSize {
//     Small = 's',
//     Medium = 'm',
//     Large = 'l',
// }

// console.log(PizzaSize.Small)  //'s'

//06 - FUNCTION

const addExpression = function (x: number, y: number ): string {
    return `${x} + ${y}`;
}

const fn = (a: number, b: number, c: number, ...restParams: number[]) => {};

type LogFn = (m: string) => number | void;

const log: LogFn = (message) => {
    console.log(message);
}

log('Helo');

// mетоди об'єкти

interface IPizza {
    size: 'small' | 'medium' | 'large';
    logSize? (): void;
    logSize?: () => void;
}

// 07 - CLASSES

interface Params {
    size: string,
    toppings: string[],
}

class Pizza {
    public size;
    private toppings;
    constructor ({size, toppings = []}: Params) {
        this.size = firstName;
        this.toppings = toString
    }

    public addTopping() {
        this.toppings.push(topping);
    }
}