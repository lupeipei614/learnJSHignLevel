/**
 * Object.seal(obj)
 * 封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置
 *  1.即所有的属性都不能被delete删除，所有的属性描述符不能被修改
 *  2.不能给对象添加新属性
 */
var obj = {
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
console.log(Object.getOwnPropertyDescriptors(obj));

Object.seal(obj);
console.log(Object.getOwnPropertyDescriptors(obj));
//对象所有属性的属性描述符都被改为不可配置

//相当于做了如下操作
// for (var key in obj) {
//   Object.defineProperty(obj, key, {
//     ...Object.getOwnPropertyDescriptor(obj, key),
//     configurable: false,
//   });
// }

//height属性不会被添加到obj上
obj.height = 18;
console.log(Object.getOwnPropertyDescriptors(obj));
