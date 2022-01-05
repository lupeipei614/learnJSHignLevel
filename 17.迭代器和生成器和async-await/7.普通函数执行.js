function foo() {
  console.log("函数开始执行");
  const value1 = 100;
  console.log(value1);
  // 位置1

  const value2 = 200;
  console.log(value2);
  // 位置2

  const value3 = 300;
  console.log(value3);
  // 位置3

  console.log("函数执行终止");
}

foo();
//下面是执行结果
// 函数开始执行
// 100
// 200
// 300
// 函数执行终止

// 如果我们希望函数执行到位置1暂停，即仅执行第一行代码
// 然后继续执行，到位置2暂停，
// 然后继续执行，到位置3暂停
// 然后继续执行到结束
// 可以使用生成器控制函数的执行