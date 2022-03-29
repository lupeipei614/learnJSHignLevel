class Depend {
  constructor() {
    this.reactiveFns = new Set();
  }
  depend() {
    if (activeReactiveFn) {
      this.reactiveFns.add(activeReactiveFn);
    }
  }
  notify() {
    this.reactiveFns.forEach((fn) => fn());
  }
}

const targetMap = new WeakMap();
const getDepend = (target, key) => {
  let map = targetMap.get(target);
  if (!map) {
    map = new Map();
    targetMap.set(target, map);
  }

  let depend = map.get(key);
  if (!depend) {
    depend = new Depend();
    map.set(key, depend);
  }
  return depend;
};

let activeReactiveFn = null;
const watchEffect = (fn) => {
  activeReactiveFn = fn;
  fn(); //执行函数并收集依赖
  activeReactiveFn = null;
};

const obj = {
  name: "why",
  age: 18,
};

//监听obj属性的改变
const objProxy = new Proxy(obj, {
  //监听获取对象的属性值
  get(target, key, receiver) {
    const depend = getDepend(target, key);
    depend.depend();
    return Reflect.get(target, key, receiver);
  },

  //监听设置对象的属性值
  set(target, key, newVal, receiver) {
    Reflect.set(target, key, newVal, receiver);
    const depend = getDepend(target, key);
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
  console.log(objProxy.age);
});

watchEffect(() => {
  console.log(objProxy.age);
});

//当obj.name的值发生改变，所有包含依赖obj.name的代码块的函数都重新执行
objProxy.name = "lily";
