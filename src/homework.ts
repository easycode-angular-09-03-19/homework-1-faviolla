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