/**
 * Object.getOwnPropertyDescriptors() 方法用来获取一个对象的所有自身属性的描述符。
 * 语法 Object.getOwnPropertyDescriptors(obj)
 * 参数 obj 任意对象
 * 返回值 所指定对象的所有自身属性的描述符，如果没有任何自身属性，则返回空对象。
 */

const obj = {
  name: "why",
  age: 18,
  get _name() {
    //存取属性描述符  可枚举
    return this.name;
  },
  set _name(val) {
    this.name = val;
  },
};

//给obj添加一个数据属性描述符address 此属性为不可枚举
Object.defineProperty(obj, "address", {
  value: "北京市",
});

Object.setPrototypeOf(obj, { title: "我是obj的原型对象" });
console.log(Object.getPrototypeOf(obj)); // { title: '我是obj的原型对象' }

//对obj进行浅拷贝
//方法一：
const newObj = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
);
console.log(newObj); //{ name: 'why', age: 18, _name: [Getter/Setter] }

//方法二：
const newObj1 = { ...obj };
console.log(newObj1); //{ name: 'why', age: 18, _name: 'why' }  _name这个存取属性描述符被转换为了数据属性描述符

//方法三：
const newObj2 = Object.assign({}, obj);
console.log(newObj2); //{ name: 'why', age: 18, _name: 'why' } _name这个存取属性描述符被转换为了数据属性描述符

//Object.assign() 方法和对象的解构
//只能拷贝源对象的可枚举的自身属性，同时拷贝时无法拷贝属性的特性们，
//而且访问器属性会被转换成数据属性，
//也无法拷贝源对象的原型
//Object.getOwnPropertyDescriptors()方法配合 Object.create() 方法可以实现上面说的这些。

console.log(Object.getOwnPropertyDescriptors(newObj));
// {
//   name: {
//     value: 'why',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   age: { value: 18, writable: true, enumerable: true, configurable: true },
//   _name: {
//     get: [Function: get _name],
//     set: [Function: set _name],
//     enumerable: true,
//     configurable: true
//   },
//   address: {
//     value: '北京市',
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
// }

console.log(Object.getOwnPropertyDescriptors(newObj1));
// {
//   name: {
//     value: 'why',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   age: { value: 18, writable: true, enumerable: true, configurable: true },
//   _name: {
//     value: 'why',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// }

console.log(Object.getOwnPropertyDescriptors(newObj2));
// {
//   name: {
//     value: 'why',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   age: { value: 18, writable: true, enumerable: true, configurable: true },
//   _name: {
//     value: 'why',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// }

console.log(Object.getPrototypeOf(obj) === Object.getPrototypeOf(newObj)); // true
console.log(Object.getPrototypeOf(obj) === Object.getPrototypeOf(newObj1)); //false
console.log(Object.getPrototypeOf(obj) === Object.getPrototypeOf(newObj2)); //false
