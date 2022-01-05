/**
 * 普通函数执行过程中抛出异常，会立即中止函数的执行，函数内部当前下面的代码不再执行，函数所在作用域中函数调用位置下面的代码也不再执行
 * 异步函数执行过程中抛出异常，函数内部当前下面的代码不再执行，函数所在作用域中函数调用位置下面的代码依然正常向下执行，
 * 异步函数执行返回的promise对象的状态会变为rejected
 * 抛出的异常会作为异步函数执行返回的promise对象的rejected回调的参数传入
 */

async function bar() {
  console.log("bar start");
  console.log("bar 业务代码执行");
  throw new Error("error msg");
  console.log("bar end"); //这行代码没执行
}
const promise = bar();
promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("后续还有代码"); //这行代码执行了

// bar start
// bar 业务代码执行
// 后续还有代码
// Error: error msg
//     at bar (G:\03.教学视频\0.javascript-王红元\js高级\code\17.迭代器和生成器和async-await\23.异步函数的异常.js:11:9)
//     at Object.<anonymous> (G:\03.教学视频\0.javascript-王红元\js高级\code\17.迭代器和生成器和async-await\23.异步函数的异常.js:14:17)
