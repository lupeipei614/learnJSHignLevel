var obj = {
  name: "why",
  _address: "北京市",
  //在字面量对象中直接设置存取属性描述符，configurable,enumerable默认值为true
  get address() {
    return this._address;
  },
  set address(val) {
    this._address = val;
  },
};
console.log(obj);
//相当于下面写法
Object.defineProperty(obj, "address", {
  configurable: true,
  enumerable: true,
  get: function () {
    return this._address;
  },
  set: function (val) {
    this._address = val;
  },
});
