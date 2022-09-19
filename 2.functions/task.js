// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0];
  max = arr[0];
  sum = 0;
  avg = sum/arr.length;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > arr[i--]) max = arr[i]; 
    if(arr[i] < arr[i--]) min = arr[i]; 
    sum += arr[i];
  }

  +avg.toFixed(2);

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;

  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = arrOfArr[0];
  func(arr);

  for(let i = 0; i < arrOfArr.length; i++) {
    if(arrOfArr[i] > arr[i]) max = sum;
  }
  
  return max;
}

// Задание 3
function worker2(arr) {

  let numb;
  
  for(let = i; i < arr.length; i++) {
    numb = max - min;
    Math.abs(numb);
  }
}
