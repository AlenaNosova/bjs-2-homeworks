function parseCount(parsNum){
    const parsed = parseInt(parsNum)
    if(isNaN(parsed)) {
        throw new Error("Невалидное значение");
    }
    return parsed;
}

function validateCount(num) {
   try {
    return parseCount(num)
   } catch(error) {
       return error;
   }
}

class Triangle {
    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if(a > b + c || b > a + c || c > a + b) {
            throw new Error("Треугольник с такими сторонами не существует")
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const p = Triangle.getPerimeter/2;
        const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);

        return +s;
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(error) {
        return new Object ({
            getPerimeter() {
                return "Ошибка! Треугольник не существует"
            },

            getArea() {
                return "Ошибка! Треугольник не существует"
            }
        } )
    }
}