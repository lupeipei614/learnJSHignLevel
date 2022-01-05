var obj = {
  name: "kobe",
  age: 40,
};

Object.defineProperty(obj, "address", {
  value: "北京",
  //该特性为false，则对象的此属性不能被delete删除，不能被修改，不能被重新定义为存取属性描述符
  configurable: false,
})

//测试configurable
delete obj.address
console.log(obj.address) //北京  address属性没有被从obj对象上删除

obj.address = "上海"
console.log(obj.address) //北京  address属性值没有被修改


Object.defineProperty(obj, "address", {
  value: "上海",
  configurable: true
}) //报错，Cannot redefine property: address  address不能被重新定义


