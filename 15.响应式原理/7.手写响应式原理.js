//2.收集依赖类的封装
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
//传入一个对象和属性名，获取对象的depend
function getDepend(target, key) {
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
}
//响应式函数的封装

let activeReactiveFn = null;
function watchEffect(fn) {
  activeReactiveFn = fn;
  fn(); //首次执行一下
  activeReactiveFn = null;
}

//对象的响应式操作
function reactive(obj) {
  return new Proxy(obj, {
    get: function (target, key, receiver) {
      const depend = getDepend(target, key);
      depend.depend();
      return Reflect.get(target, key, receiver);
    },
    set: function (target, key, newVal, receiver) {
      Reflect.set(target, key, newVal, receiver);
      //需要实现，当对象的属性值被改变，依赖此属性的代码块重新执行
      const depend = getDepend(target, key);
      depend.notify();
    },
  });
}
const obj = reactive({
  name: "why",
  age: 18,
});
const info = reactive({
  name: "koby",
});

watchEffect(function () {
  const newName = obj.name;
  console.log(newName);
});
watchEffect(function () {
  console.log(obj.name);
  console.log(obj.age);
});
watchEffect(function () {
  console.log(obj.age);
});
watchEffect(function () {
  console.log(info.name);
});

obj.name = "lily";
info.name = "curry";
