/**
 * 每个对象都有一个特殊的内置属性[[prototype]],指向一个对象，这个对象叫做对象的原型，
 * 为了和函数的原型做区分，我们一般称之为隐式原型对象
 *
 * 早起的ECMA是没有规范如何去查看内置属性[[prototype]]这个原型对象的
 *  1.浏览器给对象提供了一个属性__proto__，可以通过此属性去查看对象的原型对象
 *  2.ES5提供了一个方法Object.getPrototype(obj),去查看目标对象的原型对象
 */
var obj = { name: "why" };
console.log(obj.__proto__); //[Object: null prototype] {}
console.log(Object.getPrototypeOf(obj)); //[Object: null prototype] {}
console.log(obj.__proto__ === Object.getPrototypeOf(obj)); //true

/**
 * 原型的用处
 * 当我们从一个对象中获取一个属性的时候，它会触发[[get]]操作：
 *  1.在当前对象中查找此属性，如果找到，就返回对应的值
 *  2.如果没有找到，会去此对象的原型对象上查找此属性，如果找到，就返回对应的值
 *  3.如果没有找到，继续去原型对象的原型对象上查找此属性，如果找到，就返回对应的值
 *  ....
 *  4.找到Object.prototype.__proto__,此时Object.prototype.__proto__为null,则停止查找，返回undefined
 */

obj.__proto__.age = 18;
console.log(obj.age); //18 虽然obj对象上没有age属性，但是在obj.__proto__对象上找到了age属性，就返回其值18
