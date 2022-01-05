console.log(Object.prototype) //[Object: null prototype] {}

var obj = {
  name: 'why'
}
//字面量定义对象的方式本质上是通过new Object()创建对象
//所以obj.__proto__指向Object.prototype原型对象

console.log(obj.__proto__) //[Object: null prototype] {}
console.log(Object.prototype) //[Object: null prototype] {}
console.log(obj.__proto__ === Object.prototype) //true

console.log(Object) //[Function: Object]   Object是一个构造函数
console.log(Object.prototype.constructor) //[Function: Object]
console.log(Object.prototype.constructor === Object) //true

//Object.prototype原型对象上的属性
console.log(Object.prototype)
console.log(Object.getOwnPropertyDescriptors(Object.prototype))

function foo() {}
console.log(foo.prototype) // {}
console.log(Object.getOwnPropertyDescriptors(foo.prototype))
// {
//   constructor: {
//     value: [Function: foo],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   }
// }

//函数的原型对象prototype也是一个对象,此原型对象也有一个内置的[[prototype]]属性
console.log(foo.prototype.__proto__) //[Object: null prototype] {} 是Object.prototype顶层原型对象
console.log(foo.prototype.__proto__.__proto__) //null