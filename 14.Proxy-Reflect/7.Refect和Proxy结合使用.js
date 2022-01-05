const obj = {
  name: "why",
  age: 18,
};

const objProxy = new Proxy(obj, {
  get: function (target, key) {
    console.log(`监听到获取对象的${key}的属性值`)
    return Reflect.get(target, key);
  },
  set: function (target, key, newVal) {
    //Reflect.set的执行返回一个布尔值，如果设置值成功，为true,如果失败为false
    const result = Reflect.set(target, key, newVal);
    if (result) {
      console.log("设置值成功");
    } else {
      console.log("设置值失败");
    }
  },
});

objProxy.name = 'lily'
console.log(objProxy.name)
