// Задача №1. Форматтер чисел

function parseCount(num) {
    let isNumber = Number.parseInt(num);
    if (isNaN(isNumber)) {
        throw new Error("Невалидное значение");
    } else {
        return isNumber;
    }
}

function validateCount(value) {
    try {
        parseCount(value);
        return parseCount(value);
    } catch (err) {
        return err;
    }
}

// Задача №2. Треугольник

class Triangle {

    constructor(a, b, c) {

        this.a = a;
        this.b = b;
        this.c = c;

        if ((a + b) < c || (b + c) < a || (c + a) < b) {
            throw new Error("Треугольник с такими сторонами не существует");
        }

    }

    getPerimeter() {
        return (this.a + this.b + this.c);
    }

    getArea() {
        let s, p;
        p = 0.5 * (this.a + this.b + this.c);
        s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return parseFloat(s.toFixed(3));
    }

}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c)
    } catch (err) {
        return {
            getArea: () => 'Ошибка! Треугольник не существует',
            getPerimeter: () => 'Ошибка! Треугольник не существует'
        };
    }
}

let tri = new Triangle(3, 4, 5)

console.log(tri.getArea())