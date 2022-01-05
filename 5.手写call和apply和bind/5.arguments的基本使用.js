function sum(num1, num2, num3) {
  console.log(arguments);
  //对arguments的常用操作
  //1.获取实参的长度
  console.log(arguments.length);

  //2.获取某一个参数
  console.log(arguments[2]);

  //3.获取当前arguments所在的函数
  console.log(arguments.callee);
}

sum(1, 2, 3, 4, 5);
