/**
 * 生成器:
 * 是ES6中新增的一种函数控制、使用方案，它可以让我们更加灵活的控制函数什么时候暂停执行、继续执行等
 * 平时我们编写的普通函数，这些函数终止的条件通常是返回值或者发生了异常，但是一旦终止，无法继续执行
 */

/**
 * 生成器函数也是一个函数，但是和普通函数有一些区别：
 * + 生成器函数需要在function的后面加一个符号`*`
 * + 生成器函数可以通过`yield`关键字来控制函数的执行过程
 * + **生成器函数执行会返回一个生成器(Generator)**
 *   + 生成器事实上是一种特殊的迭代器
 */

//创建一个生成器函数
function * foo() {
  console.log("函数开始执行");
  const value1 = 100;
  console.log(value1);
  yield; // 位置1

  const value2 = 200;
  console.log(value2);
  yield; // 位置2

  const value3 = 300;
  console.log(value3);
  yield; // 位置3

  console.log("函数执行终止");
}

//执行生成器函数获取生成器
const generator = foo()
// 通过调用生成器的next方法去控制函数执行
generator.next()
console.log('------')
generator.next()
generator.next()
console.log('------')
generator.next()

// 函数开始执行
// 100
// ------
// 200
// 300
// ------
// 函数执行终止