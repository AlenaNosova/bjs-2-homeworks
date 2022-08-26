"use strict";

function validate() {
  let a = document.getElementById("a");
  let b = document.getElementById("b");
  let c = document.getElementById("c");

  if(a,b,c == "" || a,b,c == NaN) {
    return false;
  }
  return true
}

function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
  
 if (d == 0) {
    arr  = -b/(2*a);
  } else if (d > 0) {
    arr = (-b + Math.sqrt(d) )/(2*a) && (-b - Math.sqrt(d) )/(2*a);
  }
  return arr; // array
}

"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
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

