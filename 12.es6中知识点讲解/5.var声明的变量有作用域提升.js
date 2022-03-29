/**
 * 作用域提升：在声明变量的作用域中，如果这个变量可以在声明之前被访问，那么我们可以称之为作用域提升；
 */

//var声明的变量存在作用域提升，即在声明之前可以访问
console.log(foo) //undefined
var foo = 'abc'

//let/const声明的变量在包含他们的词法环境被实例化时被创建，但是不可以被访问，即let/const 声明的变量不存在作用域提升
//console.log(flag) // ReferenceError: Cannot access 'flag' before initialization
let flag =  true