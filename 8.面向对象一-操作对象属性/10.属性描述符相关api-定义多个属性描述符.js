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

console.log(obj);
//因为address是不可枚举的，所有没有输出address属性，但是可以通过obj.address获取值
console.log(obj.address)
