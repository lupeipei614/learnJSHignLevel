/**
 * 如果只是在function前面加了async，函数内部没有其他特殊的关键字，异步代码的执行和普通函数的执行没有区别
 */
async function foo() {
  console.log('foo start')
  console.log('foo 业务代码执行')
  console.log('foo end')
}
console.log('script start')
foo()
console.log('script end')

// script start
// foo start
// foo 业务代码执行
// foo end
// script end