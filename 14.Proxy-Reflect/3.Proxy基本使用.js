/**
 * 在ES6中，新增了一个Proxy类，用于帮助我们创建一个代理：
 *    如果我们希望监听对一个对象的相关操作，我们可以先创建一个这个对象的代理对象（Proxy对象）
 *    之后对改对象的所有操作，都通过代理对象完成，
 *    代理对象可以监听到我们想要对原对象进行哪些操作
 *
 *    new Proxy(target, handler)
 *        target为要监听的目标对象
 *        Proxy对象有13种默认的捕获器方法，
 *        如果需要监听对原对象的某种操作，然后做出相应处理，可以在handler对象中重写对应的捕获器方法
 */

const obj = {
  name: "coderwhy",
  age: 18,
};

//创建一个obj的代理对象
const objProxy = new Proxy(obj, {
  //重写proxy对象的get捕获器：监听获取目标对象的属性值
  get(target, key, receiver) {
    //get捕获器有三个参数：
    //target为目标对象，key为当前操作的属性名，receiver为目标对象的代理对象即objProxy
    console.log(`监听到获取obj对象的${key}属性的值`);
    return target[key];
  },
  //重写proxy对象的set捕获器:监听设置目标对象的属性值
  set(target, key, newVal, receiver) {
    //set捕获器有四个参数：
    //target为目标对象，key为当前操作的属性名，newVal为给此属性设置的新值，receiver为目标对象的代理对象即objProxy
    console.log(`监听到obj对象的${key}属性的值被重新赋值了`);
    target[key] = newVal;
  },
  //监听对对象进行的in操作
  has: function (target, key) {
    console.log(`监听到对obj对象的${key}属性的in操作`);
    return key in target;
  },
  //监听对对象的delete操作的捕获器
  deleteProperty: function (target, key) {
    console.log(`监听到对obj对象的${key}属性的delete操作`);
    delete target[key];
  },
});

//对obj对象要做的所有操作，都对其代理对象操作，

//获取对象的属性值
console.log(objProxy.name);
//设置对象的属性值
objProxy.age = 30;

// in操作
console.log("name" in objProxy);

//delete操作
delete objProxy.age;
console.log(obj);
