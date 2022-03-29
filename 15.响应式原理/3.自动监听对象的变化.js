class Depend {
  constructor() {
    this.reactiveFns = [];
  }
  add(reactiveFn) {
    this.reactiveFns.push(reactiveFn);
  }
  notify() {
    this.reactiveFns.forEach((fn) => fn());
  }
}

const depend = new Depend();
const watchEffect = (fn) => {
  depend.add(fn);
};

const obj = {
  name: "why",
  age: 18,
};

//监听obj属性的改变
const objProxy = new Proxy(obj, {
  //监听获取对象的属性值
  get(target, key, receiver) {
    return Reflect.get(target, key, receiver);
  },

  //监听设置对象的属性值
  set(target, key, newVal, receiver) {
    Reflect.set(target, key, newVal, receiver);
    depend.notify();
  },
});

//收集每一个依赖obj.name的函数
watchEffect(() => {
  const newName = objProxy.name;
  console.log(newName);
});

watchEffect(() => {
  console.log(objProxy.name);
});

//当obj.name的值发生改变，所有包含依赖obj.name的代码块的函数都重新执行
objProxy.name = "lily";
