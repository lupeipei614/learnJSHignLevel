/**
 * Object.isFrozen(obj)
 * 判断一个对象是否被冻结
 *  1.对象不可以扩展，即不添加新属性
 *  2. 对象的所有属性都是不可配置的，即所有属性描述符的configurable为false
 *  3.对象的所有属性值都是不可以修改的，即所有属性描述符的writable为false
 */

//一个空对象被Object.preventExtensions()处理后，就变成是冻结的
var emptyObj = {};
Object.preventExtensions(emptyObj);
console.log(Object.isFrozen(emptyObj)); //true

//非空空对象被Object.seal()处理后,不是被冻结状态
var obj1 = { name: true };
Object.seal(obj1);
console.log(Object.isFrozen(obj1)); //false

var obj2 = {
  name: "why",
  _age: 18,
  get age() {
    return this._age;
  },
  set age(val) {
    this._age = val;
  },
  running: function () {},
};
Object.preventExtensions(obj2);
for (var key in obj2) {
  //in操作符可以用来判断一个属性是否属于一个对象
  if ("writable" in Object.getOwnPropertyDescriptor(obj2, key)) {
    Object.defineProperty(obj2, key, {
      ...Object.getOwnPropertyDescriptors(obj2),
      configurable: false,
      writable: false,
    });
  } else {
    Object.defineProperty(obj2, key, {
      ...Object.getOwnPropertyDescriptors(obj2),
      configurable: false,
    });
  }
}
console.log(Object.isFrozen(obj2)); //true

//被Object.freeze()处理的对象时冻结的
var obj3 = { name: "why" };
Object.freeze(obj3);
console.log(Object.isFrozen(obj3));
