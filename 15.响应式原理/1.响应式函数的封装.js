const reactiveFns = []; //收集响应式函数
const watchEffect = (fn) => {
  reactiveFns.push(fn);
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
reactiveFns.forEach((fn) => fn());
