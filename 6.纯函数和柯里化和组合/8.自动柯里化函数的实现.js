//需求：传入一个普通函数，返回一个新的函数，是传入的函数的柯里化函数
function curry(fn) {
  return function proxy(...args) {
    //通过fn.length获取到fn的形参个数
    //假如传给proxy函数的实参个数大于等于fn的形参个数，说明已经传入了所有的参数

    if (args.length >= fn.length) {
      //直接调用fn即可，但需要保证proxy函数上下文的this和fn的this保持一致,并返回执行结果
      return fn.apply(this, args);
    } else {
      return function proxy2(...params) {
        return proxy.call(this, ...args.concat(params));
      };
    }
  };
}

//满足下面功能
function add(x, y, z) {
  return x + y + z;
}

const curryAdd = curry(add);
console.log(curryAdd(10, 20, 30)); //60
console.log(curryAdd(10, 20)(30)); //60
console.log(curryAdd(10)(20, 30)); //60
console.log(curryAdd(10)(20)(30)); //60
