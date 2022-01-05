//方法一：类的声明
class Person {

}
//方法二：类的表达式
const Student = class {

}

console.log(Person.prototype) //{}
console.log(Object.getOwnPropertyDescriptors(Person.prototype))
// {
//   constructor: {
//     value: [class Person],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   }
// }
console.log(Person.prototype.__proto__)//[Object:null prototype] {}
console.log(Person.prototype.constructor) //[class Person]
console.log(typeof Person) //function

var p = new Person()
console.log(p.__proto__ === Person.prototype) //true