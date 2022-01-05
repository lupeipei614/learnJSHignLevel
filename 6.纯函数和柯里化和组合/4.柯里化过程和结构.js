//下面把add函数转换为sum函数的过程就叫柯里化
function add(x, y, z) {
  return x + y + z;
}
var result = add(10, 20, 30);
console.log(result); //60

//把add函数进行柯里化
function sum(x) {
  return function (y) {
    return function (z) {
      return x + y + y;
    };
  };
}
var result1 = sum(10)(20)(30);
console.log(result1);


//简化柯里化的代码
var sum2 = x => y => z => x + y + z
var result2 = sum2(10)(20)(30);
console.log(result2);

