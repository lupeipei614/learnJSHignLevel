/**
 * 箭头函数：
 *  函数中没有this和arguments，会去其上级作用域中寻找
 *  没有显式原型对象，所以不能作为构造函数，使用new去创建对象
 *
 */
const foo = () => {};
console.log(foo.prototype); //undefined
const f = new foo(); //TypeError: foo is not a constructor
