/**
 * Object.isSealed(obj)
 * 判断一个对象是否被密封
 *  1.对象不可以添加新属性
 *  2. 对象的所有属性都是不可配置的，即所有属性描述符的configurable为false
 */

//一个空对象被Object.preventExtensions()处理后，就变成是密封的
var emptyObj = {};
Object.preventExtensions(emptyObj);
console.log(Object.isSealed(emptyObj)); //true

//非空空对象被Object.seal()处理后变成密封的
var obj1 = { name: true };
Object.seal(obj1);
console.log(Object.isSealed(obj1)); //true

var obj2 = { name: true };
Object.preventExtensions(obj2);
for (var key in obj2) {
  Object.defineProperty(obj2, key, {
    ...Object.getOwnPropertyDescriptors(obj2),
    configurable: false,
  });
}
console.log(Object.isSealed(obj2)); //true

//一个密封对象同时也是不可扩展的
console.log(Object.isExtensible(obj2)); //false

//一个冻结的对象同时也是密封的
var obj3 = { name: "kobe", age: 40 };
Object.freeze(obj3);
console.log(Object.isSealed(obj3)); //true
