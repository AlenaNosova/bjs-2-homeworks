"use strict";

function solveEquation(a, b, c) {
  let arr;
  let d = b^2-4*a*c;
  
  if (d < 0) {
    arr = [];
  } if (d == 0) {
    arr  = -b/(2*a);
  } else if (d > 0) {
    arr = (-b + Math.sqrt(d) )/(2*a) && (-b - Math.sqrt(d) )/(2*a);
  }
  return arr; // array
}

"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  let S = amount - contribution; 
  let today = new Date();
  let n = ((date.getMonth() - today.getMonth()) + ((date.getFullYear() - today.getFullYear()) *12));
  let P = percent/12/100;
  let payment = S * (P + (P / (((1 + P)^n) - 1)));
  
  totalAmount = (payment * n).toFixed(2);
  
  console.log(+totalAmount)

  return +totalAmount;
}
