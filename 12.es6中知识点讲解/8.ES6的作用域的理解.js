/**
 * ES6：有块级作用域、全局作用域和函数作用域
 *  ES6的代码块级作用域：对let/const/function/class声明的类型有效，对var声明的变量无效
 */

//1.ES6的代码块级作用域：对let/const/function/class声明的类型有效，对var声明的变量无效

//1.1 let/const/class
{
  let foo = 123;
}
console.log(foo); // Uncaught ReferenceError: foo is not defined

{
  const bar = 456;
}
console.log(bar); // Uncaught ReferenceError: bar is not defined

{
  class Person {}
}
const p = new Person(); // Uncaught ReferenceError: Person is not defined

{
  var baz = 789;
}
console.log(baz); // 789 ES6的块级作用域对var声明的变量无效

{
  var baz = 789;
  let foo = 123;
  const bar = 456;
  class Person {}
}
console.log(baz); //789 ES6的块级作用域对var声明的变量无效
console.log(foo); // Uncaught ReferenceError: foo is not defined
console.log(bar); //因为上行代码报错，不会执行
const p = new Person(); //因为上行代码报错，不会执行

//1.2 function:具有特殊性
// ES6的块级作用域对function声明的变量是有效的，
//但是因为不同的浏览器有不同的实现，大部分浏览器为了兼容以前的代码，让ES6的块级作用域对function声明的变量无效
//在仅支持es6的环境中，ES6的块级作用域对function声明的变量是有效的
//所以，ES6的块级作用域对function声明的变量无效，是应为浏览器的实现造成的
{
  function mul(a, b) {
    return a * b;
  }
}
mul(2, 3); // 6
