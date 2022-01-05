function double(num) {
  return num * 2
}
function square(num) {
  return num ** 2
}

//把一个数字先乘以2再自身平方求值
const result = square(double(12))
console.log(result)


//实现组合函数；
//compose函数执行返回一个函数，
function compose(...fns) {
  //校验传入的参数是否是函数
  for(var i = 0; i < fns.length; i++) {
    var fn = fns[i]
    if(typeof fn !== 'function') {
      throw new TypeError("argument must be function")
    }
  } 

  return function proxy(...args) {
    var index = 0
    var result = fns.length? fns[index].apply(this, args):args
    while(++index < fns.length) {
      result = fns[index].call(this, result)
    }

    return result

  }
}

const bar = compose(double, square)
const result1 = bar(12)
console.log(result1)