"use strict";

function solveEquation(a, b, c) {
  if (isNaN(a)) {
    return `Параметр "a" содержит неправильное значение "${a}"`;
  }; 
  
  if (isNaN(b)) {
    return `Параметр "b" содержит неправильное значение "${b}"`;
  }; 
  
  if (isNaN(c)) {
    return `Параметр "c" содержит неправильное значение "${c}"`;
  };

  let arr = [];
  let d = b**2-4*a*c;
  let x1, x2
  
 if (d == 0) {
    x1  = -b/(2*a);
    return arr.push(x1)
  } else if (d > 0) {
    x1 = (-b + Math.sqrt(d))/(2*a);
    x2 = (-b - Math.sqrt(d))/(2*a);
    return arr.push(x1,x2)
  }
}

function calculateTotalMortgage(percent, contribution, amount, date) {

  if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  };

  if (isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  };

  if (isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  };

  let totalAmount;

  let s = amount - contribution; 
  let today = new Date();
  let n = ((date.getMonth() - today.getMonth()) + ((date.getFullYear() - today.getFullYear()) *12));
  let p = percent/12/100;
  let payment = s * (p + (p / (((1 + p)**n) - 1)));
  
  totalAmount = (payment * n).toFixed(2);
  
  console.log(+totalAmount)

  return +totalAmount;
}


