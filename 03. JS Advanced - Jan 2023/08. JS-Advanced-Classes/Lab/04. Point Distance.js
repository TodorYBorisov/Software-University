class Point {                                   // Създаваме клас с име Point
    constructor(x, y) {                         // Конструктора приема два параметъра точка x и y
        this.x = x;                             // Сетваме техните стойности 
        this.y = y;                             // Сетваме техните стойности 
    }
    static distance(p1, p2) {                   // Създаваме статичен метод, който приема два параметъра p1 и p2
        const dx = p1.x - p2.x;                 // Разстоянието между двете точки по x оста е като от едната стойност извадим другата
        const dy = p1.y - p2.y;                 // Разстоянието между двете точки по y оста е като от едната стойност извадим другата
        return Math.sqrt(dx ** 2 + dy ** 2);    // Накрая функцията ще върне Корен квадратен от двете точки вдигнати на втора степен
    }
}

const point1 = new Point(1, 1);                 // Създаваме си точка1 , която е инстанция на класа 
const point2 = new Point(4, 5);                 // Създаваме си точка2 , която е инстанция на класа

console.log(point1, point2);                    // Печатаме двете инстанции 
console.log(Point.distance(point1, point2));    // Печатаме резултата от статичния метод извикан през класа с двете създадени точки 


let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
