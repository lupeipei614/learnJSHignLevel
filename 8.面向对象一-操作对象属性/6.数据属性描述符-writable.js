var obj = {
  name: "kobe",
  age: 40,
};

Object.defineProperty(obj, "address", {
  value: "北京",
  //该特性为false，则对象的此属性不能被delete删除，不能被修改，不能被重新定义为存取属性描述符
  configurable: false,
  //该特性为false，则对象的此属性不能被for in遍历，不能被Object.keys(obj)获取到，使用console.log(obj)输出是不能被输出
  enumerable: false,
  //该特性为false，则对象的此属性的值不可以被修改
  writable: false,
})



//测试writable
obj.address = "上海"
console.log(obj.address) //北京

 
