Function.prototype.hyBind = function (thisArg, ...args) {
  //获取调用hyBind的函数
  var fn = this;
  //对thisArg进行处理
  thisArg =
    thisArg === null || thisArg === undefined ? window : Object(thisArg);

  return function proxyFn(...params) {
    //执行调用hyBind的函数
    thisArg.fn = fn;
    var totalArgs = [...args, ...params];
    var result = thisArg.fn(...totalArgs);
    delete thisArg.fn;
    return result;
  };
};

function foo() {
  console.log("foo函数被执行");
  return 20
}
function sum(a, b, c, d) {
  console.log(a, b, c, d);
}

var bar = foo.hyBind("abc");
console.log(bar());

var baz = sum.hyBind("bcd", 1, 2);
baz(3, 4);

var bbb = sum.hyBind("acd");
bbb(1, 2, 3, 4);
var ccc = sum.hyBind("acd", 1, 2, 3, 4);
ccc();
