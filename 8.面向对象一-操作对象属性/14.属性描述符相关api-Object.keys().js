/**
 * Object.keys 返回一个所有元素为字符串的数组，]
 * 其元素来自于从给定的object上面可直接枚举的属性。
 * 这些属性的顺序与手动遍历该对象属性时的一致。
 */

 var obj = {
  name: "why",
  _age: 18,
  eatting: function () {},
};

//一次性给目标对象定义多个属性描述符
Object.defineProperties(obj, {
  address: {
    configurable: false,
    enumerable: false,
    writable: false,
    value: "北京市",
  },
  height: {
    configurable: true,
    enumerable: true,
    writable: true,
    value: 1.88
  },
  age: {
    configurable: true,
    enumerable: true,
    get: function () {
      return this._age;
    },
    set: function (val) {
      this._age = val;
    },
  },
});
console.log(obj)
console.log(Object.keys(obj));
//obj不可以枚举的属性是不会出现在Object.keys(obj)返回的对象中的

