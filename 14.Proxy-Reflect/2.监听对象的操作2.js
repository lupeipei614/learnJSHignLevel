/**
 * 有一个对象，我们希望监听这个对象中的属性被设置或获取的过程
 *
 */

const obj = {
  name: "coderwhy",
  age: 18,
};

//创建一个obj的代理对象
const objProxy = new Proxy(obj, {
  //重写proxy对象的get捕获器
  get(target, key) {
    console.log(`监听到获取obj对象的${key}属性的值`);
    return target[key];
  },
  //重写proxy对象的set捕获器
  set(target, key, newVal) {
    console.log(`监听到obj对象的${key}属性的值被重新赋值了`);
    target[key] = newVal;
  },
});

//对obj对象要做的所有操作，都对其代理对象操作，
console.log(objProxy.name);
objProxy.age = 30;

// 监听到获取obj对象的name属性的值
// coderwhy
// 监听到obj对象的age属性的值被重新赋值了
