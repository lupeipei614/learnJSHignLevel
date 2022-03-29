const obj = {
  name: "why",
  age: 18,
};

//对象的解构是按照键名赋值的,不是按照顺序赋值的
const { age, name } = obj;
console.log(name, age); //why 18

//可以不以键名作为变量的名字，自定义变量名
const { age: newAge } = obj;
console.log(newAge); // 18

//给设置默认值
const { address: newAddress = "北京市" } = obj;
console.log(newAddress); //北京市


function foo({name, age}) {
  console.log(name, age) //why 18
}
foo(obj)