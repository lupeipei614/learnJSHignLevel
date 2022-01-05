function foo(name, age) {
  this.name = name;
  this.age = age;
}

//创建foo的代理对象
const fooProxy = new Proxy(foo, {
  //监听对函数对象的apply调用
  apply(target, thisArg, argArray) {
    //target为目标对象，thisArg为给目标函数绑定的this,argArray为传给目标函数的参数数组
    console.log("对foo进行了apply调用");
    return target.apply(thisArg, argArray);
  },
  //监听对函数对象的new调用
  construct(target, argArray) {
    //target为目标对象，argArray为传给目标函数的参数数组
    console.log("对foo进行了new调用");
    return new target(...argArray);
  },
});

fooProxy.apply({}, ["why", "18"]);
new fooProxy("lily", 30);
