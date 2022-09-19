function cachingDecoratorNew(func) {
  let cache = [];
  
  return (...args) => {
    const hash = args.join(',');
    let objectInCache = cache.find((item) => item.hash === hash);
    if (objectInCache) {
      return 'Из кэша: ' + objectInCache.result;
    }

    const result = func(...args);
    
    cache.push({hash, result});
    if (cache.length > 5) { 
      cache.splice(0, 1);
    }
    return 'Вычисляем: ' + result;
  }
}

function debounceDecoratorNew(func, delay){

  let timeoutId = null;
  func.count = 0;
  func.allCount = 0;

  return function(...args) {
    
    func.allCount++;
    
    if (!func.allCount) {
      func(...args);
      func.count++;
    }    
    
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
      timeoutId = setTimeout(() => {
      timeoutId = null;
      func(...args);
      func.count++;
    }, delay);
  }
}
