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
  wrapper.count = 0;
  wrapper.allCount = 0;
  function wrapper(...args) {

    if (!wrapper.allCount) {
      func(...args);
      wrapper.count++;
    }

    wrapper.allCount++;
    
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    timeoutId = setTimeout(() => {
      timeoutId = null;
      func(...args);
      wrapper.count++;
    }, delay);
  }

  return wrapper;
}
