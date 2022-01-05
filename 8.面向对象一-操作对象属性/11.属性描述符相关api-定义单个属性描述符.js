var obj = {
  name: "why",
  _address: "北京市",
  running: function () {},
};

Object.defineProperty(obj, "age", {
  value: 18,
  configurable: true,
  enumerable: true,
  writable: true,
});

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

console.log(obj);
console.log(obj.address);
