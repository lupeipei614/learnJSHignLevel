//1.查看下函数原型对象上有哪些属性
function foo() {}

console.log(foo.prototype); //{}
console.log(Object.getOwnPropertyDescriptors(foo.prototype));
// {
//   constructor: {
//     value: [Function: foo],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   }
// }

//说明，函数原型对象上有一个属性constructor,并且constructor属性是不可枚举的

console.log(foo.prototype.constructor === foo); //true 函数原型对象上的constructor属性指向函数本身
//获取函数原型对象上的constructor函数的名字
console.log(foo.prototype.constructor.name); //foo  函数的名字可以通过访问函数的name属性获取






