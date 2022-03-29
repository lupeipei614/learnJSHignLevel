/**
 * export导出的几种方式：
 *  1.变量在声明时直接导出，即export后跟变量声明语句
 *  2.变量声明后，统一导出
 *  3.统一导出时起别名
 * 4.export default 默认导出
 */
// 2.变量声明后，统一导出
const name = "why";
const age = 18;

function sum(a, b) {
  return a + b;
}

class Person {
  constructor(name) {
    this.name = name;
  }
}

//export关键字后面的{}不是一个对象，而是一种语法
export { name, age, sum, Person };
