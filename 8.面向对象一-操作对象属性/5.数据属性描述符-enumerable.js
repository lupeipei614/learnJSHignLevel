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
})



//测试enumerable
for(var key in obj) {
  console.log(key)  
}

//name  age          address没有被遍历出来

console.log(Object.keys(obj))  //[name, age]  不包含address

console.log(obj)  //{name: "kobe", age: 40}  不包含address
 
