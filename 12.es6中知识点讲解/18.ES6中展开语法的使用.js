/**
 * ES6中展开语法的使用：
 *  1.函数调用时
 *  2.构造数组时
 *  3.构造对象时（ES2018即ES9新增）
 */
const names = ['lily', 'koby','curry']
const name = 'why'
const info = {name: 'why', age: 18}

//1.函数调用
function foo(x,y,z) {
  console.log(x,y,z)
}
foo(...names) //lily koby curry
foo(...name) //w h y

//2.构造数组时
const newNames = [...names, ...name]
console.log(newNames) //[ 'lily', 'koby', 'curry', 'w', 'h', 'y' ]

//3.构造对象时
const obj = {...info, address: '北京市'}
console.log(obj) //{ name: 'why', age: 18, address: '北京市' }
