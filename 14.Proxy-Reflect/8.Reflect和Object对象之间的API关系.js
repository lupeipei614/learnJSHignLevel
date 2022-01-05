/**
 * Reflect.apply(target, thisArgument, arguments)
 *    target 目标函数  thisArgument 要绑定的this对象  arguments 参数数组
 *    对一个函数进行调用操作，
 * Reflect.constructor(target, arguments[, newTarget])
 *    对构造函数进行new操作，相当于执行 new target(...arguments)
 * Reflect.defineProperty(target, property, attributes)
 *    如果设置成功，返回true
 * Reflect.deleteProperty(target, propertyKey)
 *    相当于delete target[propertyKey]
 * Reflect.get(target, propertyKey[,receiver])
 *    获取对象的某个属性的值，相当于target[propertyKey]
 * Reflect.getOwnPropertyDescriptor(target, propertyKey)
 *
 *
 *
 *
 */
let s = Symbol();
const obj = {
  _name: "why",
  get name() {
    return this._name;
  },
  set name(newVal) {
    this._name = newVal;
  },
  s: "不可描述的秘密",
};

//为对象obj添加一个不可枚举属性work
Object.defineProperty(obj, "work", {
  value: "teacher",
});

// console.log(Object.getOwnPropertyDescriptors(obj))
console.log(Object.keys(obj)); // [ '_name', 'name', 's' ]
//Object.keys(target)返回目标对象所有可枚举属性名组成的数组
console.log(Reflect.ownKeys(obj)); //[ '_name', 'name', 's', 'work' ]
//Reflect.ownKeys(target)返回目标对象素有的属性名组成的数组
