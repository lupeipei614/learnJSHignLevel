/**
 * 另外七种捕获器：
 *
 */

/**
 * Object.getPrototypeOf(target)
 *    target 目标对象
 *    获取目标对象的__proto__原型对象
 * Object.setPrototypeOf(target, prototype)
 *    target 目标对象
 *    设置目标对象的__proto__原型对象为prototype
 * Object.getOwnPropertyDescriptor(target, prop)
 *    返回指定对象上一个自有属性对应的属性描述符。
 *    target 目标对象
 *    prop   目标属性
 *
 * Reflect.ownKeys(target) 方法
 *    返回一个由目标对象自身的属性键组成的数组。
 *    它的返回值等同于Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))。
 * Object.isExtensible(target) 方法
 *    判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）。
 * Object.preventExtensions(target)方法
 *    让一个对象变的不可扩展，也就是永远不能再添加新的属性。
 */
const obj = { name: "why", age: 18 };
const objProxy = new Proxy(obj, {
  //监听对目标对象进行的Object.getPrototypeOf操作
  getPrototypeOf(target) {
    console.log("监听到了对obj进行的Object.getPrototypeOf操作");
    return Object.getPrototypeOf(target);
  },
  setPrototypeOf(target, prototype) {
    // target为目标对象 prototype为要被设置为目标对象原型对象的对象
    console.log("监听到了对obj进行的Object.setPrototypeOf操作");
    return Object.setPrototypeOf(target, prototype);
  },
  getOwnPropertyDescriptor(target, prop) {
    console.log("监听到了对obj进行的Object.getOwnPropertyDescriptor操作");
    return Object.getOwnPropertyDescriptor(target, prop);
  },
  defineProperty(target, property, descriptor) {
    console.log("监听到了对obj进行的Object.defineProperty操作");
    return Object.defineProperty(target, property, descriptor);
  },
  //监听对目标对象进行的Object.getOwnPropertySymbols或Object.getOwnPropertyNames或Reflect.ownKeys操作
  ownKeys(target) {
    console.log(
      "监听到了对obj进行的Object.getOwnPropertyNames/Object.getOwnPropertySymbols操作"
    );
    return Object.getOwnPropertyNames(target);
  },
  isExtensible(target) {
    console.log("监听到了对obj进行的Object.isExtensible操作");
    return Object.isExtensible(target);
  },
  preventExtensions(target) {
    console.log("监听到了对obj进行的Object.preventExtensions操作");
    return Object.preventExtensions(target);
  },
});
const objPrototype = Object.getPrototypeOf(objProxy);
console.log(objPrototype); // [Object: null prototype] {}

Object.setPrototypeOf(objProxy, { title: "讲师" });
Object.getOwnPropertyDescriptor(objProxy, "name");
Object.defineProperty(objProxy, "height", {
  value: "1.88",
  writable: true,
  enumerable: true,
  configurable: true,
});
Object.getOwnPropertyNames(objProxy);
Object.getOwnPropertySymbols(objProxy);
console.log(Reflect.ownKeys(objProxy));
// console.log(Object.isExtensible(objProxy));
// Object.preventExtensions(objProxy);
// console.log(Object.isExtensible(objProxy));
