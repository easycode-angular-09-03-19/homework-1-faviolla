/**
 * task 01
 * 
 * @param n: number
 */

function factorial(n: number): number {
    return n ? n * factorial(n - 1) : 1;
}

factorial(5);


/**
 * task 02
 * 
 * Создать функцию multiply, которая будет принимать любое 
 * количество чисел и возвращать их произведение: 
 * multiply(1,2,3) = 6 (1*2*3) 
 * Если нет ни одного аргумента, вернуть ноль: multiply() // 0
 * 
 */

function multiply(): number {
    let multiplication: number = 1;
        for (let element of arguments) {
            multiplication *= element;
        }
    return arguments.length === 0 ? 0 : multiplication;
}

/**
 * task 03
 * 
 * Создать функцию, которая принимает строку и возвращает 
 * строку-перевертыш: reverseString(‘test’) // “tset”
 * 
 * @param str: string 
 */

function reverseString(str: string): string {
    return str.split('').reverse().join('');
}
reverseString('string');

/**
 * task 04
 * 
 * Создать интерфейс Админа
 */

interface iAdmin {
    name: string;
    email: string;
    password: string;
    type?: string;
}

const myAdmin: iAdmin = {
    name: 'Vova',
    email: 'vova@gmail.com',
    password: 'mypass'
}

/**
 * task 05
 * 
 * Создайте абстрактный класс Car с двумя методами 
 * drive (ехать) и refuel (заправка) а также с двумя 
 * свойствами mileage (общий пробег машины) и fuel 
 * (количество бензина в машине).
 * 
 */

abstract class Car {
    protected mileage: number;
    protected fuel: number;

    constructor(mileage: number, fuel: number) {
        this.mileage = mileage;
        this.fuel = fuel;
    }
    
    drive(mileage: number): void {
        console.log('drive');
    }
    refuel(): void {
        console.log('refuel');
    }
}


/**
 * task 06
 * 
 * Наследоваться от абстрактного класса Car и реализовать 
 * методы абстрактного класса drive (ехать) и refuel (заправка). 
 * Метод drive должен принимать количество километров и 
 * обновлять свойство mileage и уменьшать значение свойства 
 * fuel если бензин закончился то нужно вернуть сообщение о 
 * том что нужно заправиться. Метод refuel должен увеличивать 
 * свойство fuel. Обязательно делать проверку переданных данных. 
 * Свойства fuel и mileage должны быть protected.
 * 
 * task 07
 * 
 * Создать публичный get для получения свойств fuel и mileage
 * 
 */

class Audi extends Car {
    drive(mileage: number): void | string {
        if (this.fuel <= 0) return 'You need refuel';
        this.mileage += mileage;
        this.fuel -= mileage;
    }
    refuel(): void {
        this.fuel++;
    }

    public getInfo(): any {
        return {
            mileage: this.mileage, 
            fuel: this.fuel
        };
    }
}

let AudiA5: Car = new Audi(10, 30);