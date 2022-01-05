var obj = {
  name: "kobe",
  age: 40,
};

obj.address = "北京";
//上面定义对象属性的方法相当于下面的写法
Object.defineProperty(obj, "address", {
  value: "北京",
  configurable: true,
  enumerable: true,
  writable: true,
});

Object.defineProperty(obj, "height", {
  value: 1.88,
});

//上面定义对象属性的方法相当于下面写法
Object.defineProperty(obj, "height", {
  value: 1.88,
  configurable: false,
  enumerable: false,
  writable: false,
});
