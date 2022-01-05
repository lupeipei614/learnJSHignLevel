const obj = {name: 'why', age: 18}
const objProxy = new Proxy(obj, {
  //监听获取目标对象的__proto__原型对象的操作
  getPrototypeOf(target) {
    return Object.getPrototypeOf(target)
  },
  //监听设置目标对象的__proto__原型对象的操作
  setPrototypeOf(target, prototype) {
    Object.setPrototypeOf(prototype)
  },
  //监听判断对象是否可拓展的操作
  isExtensible(target) {
    return Object.isExtensible(target)
  },
  //监听对对象进行的Object.preventExtensions操作
  preventExtensions(target) {
    Object.preventExtensions(target)
  },
  //监听对对象进行的Object.defineProperty(target, key, descriptor)操作
  defineProperty(target, key,descriptor) {
    Object.defineProperty(target, key, descriptor)
  },
  //监听获取对象的某个属性的属性描述符的操作Object.getOwnPropertyDescriptor(target, key)
  getOwnPropertyDescriptor(target, prop) {
    return Object.getOwnPropertyDescriptor(target, prop)
  },
  ownKeys(target) {
    return Object.getOwnPropertyNames(target)
  }
})