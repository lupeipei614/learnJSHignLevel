class HyError {
  constructor(errorCode, errorMessage) {
    this.errorCode = errorCode;
    this.errorMessage = errorMessage;
  }
}
function foo(type) {
  console.log("foo函数开始执行");
  if (type === 0) {
    //1.抛出异常可以抛出一个基本数据类型
    // throw 'type can not be zero'

    //2.比较常见的是抛出一个对象类型
    // throw {errorCode: -10001, errorMessage: 'type can not be zero'}

    //3.可以自创一个类，抛出这个类的对象
    // throw new HyError(-10001, "type can not be zero");

    //4.实际上Javascript已经为我们提供了一个Error类，我们可以直接常见这个类的对象
    //4.1Error包含三个属性：
    //message:创建Error对象时传入的message
    //name:Error的名称，一般和类的名称一致
    //statck: 整个Error的错误信息，包括函数的调用栈，但我们直接打印Error对象时，打印的就是stack

    // 4.2Error有一些自己的子类
    // RangeError:下标值越界时使用的错误类型
    // SyntaxError:解析语法错误时使用的错误类型
    // TypeError:出现类型错误时，使用的错误类型
    // throw new Error("type can not be zero");
    throw new TypeError("type can not be zero")
    // const error = new Error("type can not be zero");
    // error.name = 'why'
    // error.stack = 'aaa'
    // throw error;
  }
  console.log("foo函数结束执行");
}
foo(0);
console.log("后续代码执行");
