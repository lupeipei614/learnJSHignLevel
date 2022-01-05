/**
 * 生成器使用return函数，来中止生成器函数的执行
 * return函数执行返回一个obj对象，有done和value属性，done的值为true
 * return函数执行时传入的参数，会作为obj.value的值
 * 使用生成器调用return函数相当于在生成器函数执行到的当前位置，添加一个return，return返回的值为return函数执行时传入的参数
 */

//创建一个生成器函数
function* foo(n1) {
  const value1 = n1;
  console.log(value1);
  const n2 = yield value1; // 位置1 

  const value2 = n2;
  console.log(value2);
  const n3 = yield value2; // 位置2

  const value3 = n3;
  console.log(value3);
  const n4 = yield value3; // 位置3
  console.log("函数终止运行");
  return n4
}

//执行生成器函数获取生成器
// 给生成器函数的第一段代码传参，通过在调用生成器函数时，作为实参传入
const generator = foo(1);
// 通过调用生成器的next方法去控制函数执行
console.log(generator.next());
console.log('return函数执行结果', generator.return('return'))
console.log(generator.next(2));
console.log(generator.next(3));