/**
 * 给生成器函数的第一段代码传参，通过在调用生成器函数时，作为实参传入
 * 给生成器函数的第二段及以上的代码传参，
 * 通过在调用生成器的next方法时给next传参，
 * 通过在上一段代码中的yeild表达式返回值接收
 */

//创建一个生成器函数
function* foo(n1) {
  const value1 = 100 * n1;
  console.log(value1);
  const n2 = yield value1; // 位置1 
  //第二段代码中使用的参数，通过在上一段代码中的yeild表达式的返回值接收

  const value2 = 200 * n2;
  console.log(value2);
  const n3 = yield value2; // 位置2

  const value3 = 300 * n3;
  console.log(value3);
  const n4 = yield value3; // 位置3
  console.log("函数终止运行");
  return n4
}

//执行生成器函数获取生成器
// 给生成器函数的第一段代码传参，通过在调用生成器函数时，作为实参传入
const generator = foo(1);
// 通过调用生成器的next方法去控制函数执行
console.log("执行结果1：", generator.next());
//第二段代码中使用的参数，通过在第二次调用生成器的next方法时作为参数传入
console.log("执行结果2：", generator.next(2)); 
console.log("执行结果3：", generator.next(3));
console.log("执行结果4：", generator.next('abc'));


// 100
// 执行结果1： { value: 100, done: false }
// 400
// 执行结果2： { value: 400, done: false }
// 900
// 执行结果3： { value: 900, done: false }
// 函数终止运行
// 执行结果4： { value: 'abc', done: true }