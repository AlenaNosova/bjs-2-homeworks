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
        if(a > b + c || b > a + c || c > a + b) {
            throw new Error("Треугольник с такими сторонами не существует")
        }
    }

    getPerimeter(a, b, c) {
        return a + b + c;
    }

    getArea(a, b, c) {
        const p = (a + b + c)/2;
        return (p * (p - a) * (p - b) * (p - c) ^ 2).toFixed(3);
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