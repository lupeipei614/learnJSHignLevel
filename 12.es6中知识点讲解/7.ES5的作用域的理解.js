/**
 * ES5中：
 *  1.没有块级作用域
 *  2.只有两种作用域：全局作用域和函数作用域
 */

//1.没有块级作用域
//因为es5没有块级作用域，在es5环境中下面的花括号形同虚设
{
  var foo = 123
}
console.log(foo) // 123


//2.因为函数有作用域,父作用域无法访问子作用域中的变量，子作用域中可以通过作用域链访问父作用域中的变量
var flag = 789
function bar() {
  //函数bar的作用域的父作用域为全局作用域
  var baz = 456
  console.log(flag) // 789
}
bar()
console.log(baz) // Uncaught ReferenceError: baz is not defined