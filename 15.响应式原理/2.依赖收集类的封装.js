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

const depts = new Depend();
const watchEffect = (fn) => {
  depts.add(fn);
};

const obj = {
  name: "why",
  age: 18,
};

//收集每一个依赖obj.name的函数
watchEffect(() => {
  const newName = obj.name;
  console.log(newName);
});

watchEffect(() => {
  console.log(obj.name);
});

//当obj.name的值发生改变，所有包含依赖obj.name的代码块的函数都重新执行
obj.name = "lily";
depts.notify();
