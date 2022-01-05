var obj = {
  name: "kobe",
  age: 40,
};


Object.defineProperty(obj, "_address", {
  value: "北京",
  configurable: true,
  enumerable: false,
  writable: true,
})


//存取属性描述符的用法一：隐藏一个私有属性，不希望被外界直接使用和赋值
Object.defineProperty(obj, "address", {
  configurable: true,
  enumerable: true,
  get: function() {
    return this._address
  },
  set: function(val) {
    this._address = val
  }
})
console.log(obj) //{ name: 'kobe', age: 40, address: [Getter/Setter] }
console.log(obj.address) //北京
obj.address = "上海"
console.log(obj.address) //上海

//存取属性描述符的用法二：截获某一个属性的访问和设置值的过程，
Object.defineProperty(obj, "address", {
  configurable: true,
  enumerable: true,
  get: function() {
    console.log("获取了address的值")
    return this._address
  },
  set: function(val) {
    console.log("设置了address的值")
    this._address = val
  }
})

console.log(obj.address)
obj.address = 50


//在某些情况下存取属性描述符的写法的转变
