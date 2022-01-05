var sum = (num1, num2, num3) => {
  console.log(num1 + num2 + num3);
};

//高阶函数在使用时也可以传入箭头函数
var nums = [2, 34, 67];
nums.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

//箭头函数的简写
//1.如果参数只有一个，小括号可以省略
nums.forEach((item) => {
  console.log(item);
});

//2.如果函数执行体中只有一行代码, 那么可以省略大括号，并且这行代码的执行结果会作为整个函数的返回值
nums.forEach((item) => console.log(item));

var doubleNums = nums.map((item) => item * 2);
console.log(doubleNums);
var newNums = nums
  .filter((item) => item % 2 === 0)
  .map((item) => item * 100)
  .reduce((preResult, item) => preResult + item);

console.log(newNums);

//3. 如果函数执行体只有返回一个对象, 那么需要给这个对象加上()
var foo = () => {
  return { name: "why", age: 18 };
};
var bar = () => ({ name: "why", age: 18 });
