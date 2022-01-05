/**
 * 生成器函数调用会返回生成器，
 * 通过调用生成器的next方法，去控制生成器函数的执行
 *
 * 生成器的next方法执行会返回一个对象obj，此对象有done和value属性
 * 
 * 生成器函数执行：
 * 当遇到yeild就暂停执行, 此时obj.done为false,obj.value为yield后跟的值
 * 当遇到return就终止执行,此时obj.done为true,obj.value为return返回值
 * 当函数中代码执行完也会终止执行,此时obj.done为true
 *
 *
 */

//创建一个生成器函数
function* foo() {
  console.log("函数开始执行");
  const value1 = 100;
  console.log(value1);
  yield 800; // 位置1
  

  const value2 = 200;
  console.log(value2);
  yield; // 位置2
  return 700;

  const value3 = 300;
  console.log(value3);
  yield; // 位置3

  console.log("函数执行终止");
}

//执行生成器函数获取生成器
const generator = foo();
// 通过调用生成器的next方法去控制函数执行
console.log("执行结果1：", generator.next());
console.log("执行结果2：", generator.next());
console.log("执行结果3：", generator.next());
console.log("执行结果4：", generator.next());
