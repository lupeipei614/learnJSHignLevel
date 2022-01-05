/**
 * 生成器使用throw函数，来抛出异常
 * throw函数执行没有返回值
 * 使用生成器调用throw函数相当于在生成器函数执行到的当前位置，添加一个throw，抛出异常的错误为throw函数执行时传入的参数
 * 如果使用try/catch把上一个yield那行代码包裹起来，使用throw抛出异常，会调用catch的回调参数，然后继续执行下一段代码
 *
 * 只要在代码生成器函数中有捕获执行throw抛出的异常，生成器可以通过调用next方法，继续执行下面的代码
 * 如果没有在代码生成器函数中没有捕获执行throw抛出的异常，则中止生成器函数
 */

//创建一个生成器函数
function* foo(n1) {
  const value1 = n1;
  console.log(value1);
  try {
    yield value1; // 位置1
  } catch (error) {
    console.log("捕获到异常", error);
  }
  console.log("第二段代码开始执行");
  const value2 = 2;
  console.log(value2);
  yield value2; // 位置2

  const value3 = 3;
  console.log(value3);
  yield value3; // 位置3
  console.log("函数终止运行");
}

//执行生成器函数获取生成器
// 给生成器函数的第一段代码传参，通过在调用生成器函数时，作为实参传入
const generator = foo(1);
// 通过调用生成器的next方法去控制函数执行
console.log(generator.next());
console.log(generator.throw("错误原因"));
//只要在代码生成器函数中有捕获执行throw抛出的异常，生成器可以通过调用next方法，继续执行下面的代码
console.log(generator.next());
console.log(generator.next());
