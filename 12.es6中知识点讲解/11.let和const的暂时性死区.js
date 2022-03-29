/**
 * 在ES6中，使用let/const声明的变量，在声明之前，变量都是不可访问的
 * 我们把这种现象称之为暂时性死区
 */

var foo = 'abc'

if(true) {
  console.log(foo) //Cannot access 'foo' before initialization
  let foo = '123'
}