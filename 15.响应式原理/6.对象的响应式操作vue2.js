let activeReactiveFn = null;
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

const watchEffect = (fn) => {
  activeReactiveFn = fn;
  fn(); //执行函数并收集依赖
  activeReactiveFn = null;
};

//传入一个普通对象，返回一个Proxy代理对象
const reactive = (obj) => {
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    Object.defineProperty(obj, key, {
      get() {
        const depend = getDepend(obj, key);
        depend.depend();
        return value;
      },
      set(newVal) {
        value = newVal;
        const depend = getDepend(obj, key);
        depend.notify();
      },
    });
  });
  return obj;
};
const obj = reactive({
  name: "why",
  age: 18,
});
const info = reactive({
  name: "koby",
});

//收集每一个依赖obj.name的函数
watchEffect(() => {
  const newName = obj.name;
  console.log(newName);
});

watchEffect(() => {
  console.log(obj.name);
  console.log(obj.age);
});

watchEffect(() => {
  console.log(obj.age);
});
watchEffect(() => {
  console.log(info.name);
});

//当obj.name的值发生改变，所有包含依赖obj.name的代码块的函数都重新执行
obj.name = "lily";
