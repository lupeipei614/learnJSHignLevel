const obj = {
  _name: "why",
  get name() {
    return this._name;
  },
  set name(newVal) {
    this._name = newVal;
  },
};

const objProxy = new Proxy(obj, {
  get(target, key) {
    console.log(`监听到了获取对象的${key}的值的操作`)
    return Reflect.get(target, key)
  }
})

// console.log(objProxy.name)
//输出结果：
// 监听到了获取对象的name的值的操作
// why

// ***分析：***
// + objProxy.name 的执行会触发Proxy对象的get捕获器，执行Relect.get(target,key)
// + Relect.get(target,key)的执行 会执行对象的name属性的存取属性描述符的get方法，从而执行this._name,
// + this._name中的this为obj，则是通过obj._name获取_name属性的值，
// + 而没有通过代理对象获取_name属性的值==》objProxy._name，所以不会再触发Proxy的get捕获器
// + 而实际上，我们希望捕获每一次获取对象属性的值的操作，
// + 那么需要把对象的name属性的属性描述符的get方法中的this改为Proxy对象objProxy

// Reflect.get(target, key, receiver)方法接受三个参数，
// + target: 操作的目标对象
// + key: 操作的属性
// + receiver: 如果target对象中指定了getter，receiver则为getter调用时的this值。

// 所以可以 通过给Reflect.get传递receiver来改变目标对象中getter调用时的this指向
// 而Proxy对象的get捕获器接收的第三个参数receiver为该Proxy对象

const objProxy1 = new Proxy(obj, {
  get(target, key, receiver) {
    console.log(`监听到了获取对象的${key}的值的操作`)
    return Reflect.get(target, key, receiver)
  }
})

console.log(objProxy1.name)

// 监听到了获取对象的name的值的操作
// 监听到了获取对象的_name的值的操作
// why