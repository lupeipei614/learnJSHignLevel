Function.prototype.hyApply = function (thisArg, args) {
  //获取调用hyCall的函数对象
  var fn = this;
  //对绑定的thisArg做处理,确保thisArg最终一定是对象类型，除了null,undefined外
  thisArg =
    thisArg === null || thisArg === undefined ? window : Object(thisArg);

  //执行当前调用hyCall的函数,接收函数返回值
  thisArg.fn = fn;
  args = args || [];
  var result = thisArg.fn(...args);
  delete thisArg.fn;
  return result;
};

function sum(n1, n2) {
  console.log(this);
  return n1 + n2;
}

console.log(sum.hyApply("abc", [2, 5]));
