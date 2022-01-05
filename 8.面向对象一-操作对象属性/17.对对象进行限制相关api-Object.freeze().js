/**
 * Object.freeze(obj)
 * 冻结一个对象，阻止添加新属性并将所有现有属性标记为不可配置,属性值不可以被修改
 *  1.即所有的属性都不能被delete删除，所有的属性描述符不能被修改
 *  2.对象所有的属性的值不可以被修改
 *  3.不能给对象添加新属性
 *  也就是说，对象的所有属性的属性描述符的configurable,writable被设置为false
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

Object.freeze(obj);
console.log(Object.getOwnPropertyDescriptors(obj));
//对象所有属性的属性描述符的configurable,writable被设置为false



//height属性不会被添加到obj上
obj.height = 18;
console.log(Object.getOwnPropertyDescriptors(obj));

/**
 * Object.frozen(obj)
 * 检测一个对象是否被冻结
 * 返回布尔值：true代表检测的对象被冻结了
 */
console.log(Object.isFrozen(obj)) //true