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

const descriptor1 = Object.getOwnPropertyDescriptor(obj, "name");
const descriptor2 = Object.getOwnPropertyDescriptor(obj, "address");
const descriptor3 = Object.getOwnPropertyDescriptor(obj, "running");
console.log(descriptor1);
console.log( descriptor2);
console.log(descriptor3);
