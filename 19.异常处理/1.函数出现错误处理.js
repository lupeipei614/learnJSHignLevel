function sum(num1, num2) {
  //当给函数传的参数类型不正确，应该告知调用者一个错误
  if(typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw 'parameters must be a number'
  }
  return num1 + num2
}

//如果调用者没有对错误进行处理，那么程序会直接终止
console.log(sum({name: 'why'}, true))
console.log('这行代码不会执行')

// G:\03.教学视频\0.javascript-王红元\js高级\learnJSHignLevel\19.异常处理\1.函数出现错误处理.js:4
//     throw 'parameters must be a number'
//     ^
// parameters must be a number
// (Use `node --trace-uncaught ...` to show where the exception was thrown) 