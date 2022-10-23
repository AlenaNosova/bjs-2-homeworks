function cachingDecoratorNew(func) {
  let cache = [];

function wrapper(...args) {
    const hash = args.join(',');
    let objectInCache = cache.find((item) => item[hash] === cache[hash]);
    if (!objectInCache) {
        console.log("Из кэша: " + cache[hash]);
        return "Из кэша: " + cache[hash];
    }

    let result = func(...args); 
    cache.push(result); 
    if (cache.length > 5) { 
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
}
return wrapper;
}


function debounceDecoratorNew(func, delay) {
  let timeoutId = false;
  function wrapper (...args){
    if(timeoutId){
      return;
    }

    const result = func(...args);
    timeoutId = true;
    setTimeout(() => timeoutId = false, delay);
    return result;
  }

  wrapper.count = ??//количество вызовов декорированной функции
  wrapper.allCount.push(args);//количество вызовов декоратора
  return wrapper;
}

function debounceDecorator2(func) {
  // Ваш код
}
