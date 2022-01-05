/**
 * 函数作为一个对象而言，它也是有内置属性[[prototype]]这个隐式原型对象的
 * 作为函数，函数还有一个属性prototype，指向一个对象，我们一般称之为显式原型对象
 * 
 * 函数作为构造函数，被new调用的时候，
 * 会把内部创建的新的对象的[[prototype]]隐式原型对象指向构造函数的prototype显示原型对象
 */

function foo() {}

console.log(foo.__proto__); //{}
console.log(foo.prototype); //{}

//函数作为构造函数，被new调用的时候，
//会把内部创建的新的对象的[[prototype]]隐式原型对象指向构造函数的prototype显示原型对象
const f = new foo();
console.log(f.__proto__); //{}
console.log(foo.prototype); //{}
console.log(f.__proto__ === foo.prototype); //true
