function sum(num1, num2, num3) {
  console.log(arguments);
  //arguments转换为数组
  //方法一
  var newArray1 = [];
  for (var i = 0; i < arguments.length; i++) {
    newArray1.push(arguments[i]);
  }

  //方法二
  var newArray2 = Array.prototype.slice.call(arguments);

  //方法三
  var newArray3 = [].slice.call(arguments);

  //方法四
  var newArray4 = Array.from(arguments);

  //方法五
  var newArray5 = [...arguments];
  console.log(newArray1);
  console.log(newArray2);
  console.log(newArray3);
  console.log(newArray4);
  console.log(newArray5);
}

sum(1, 2, 3, 4, 5);
