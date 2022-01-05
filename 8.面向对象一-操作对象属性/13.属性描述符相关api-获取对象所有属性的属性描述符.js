var obj = {
  name: "why",
  _address: "北京市",
  get address() {
    return this._address;
  },
  set address(val) {
    this._address = val;
  },
  running: function () {},
};

const descriptors = Object.getOwnPropertyDescriptors(obj);
console.log(descriptors);
