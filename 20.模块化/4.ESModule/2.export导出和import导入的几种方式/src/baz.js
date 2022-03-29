/**
 * export导出的几种方式：
 *  1.变量在声明时直接导出，即export后跟变量声明语句
 *  2.变量声明后，统一导出
 *  3.统一导出时起别名
 * 4.export default 默认导出
 */
// 3.统一导出时起别名
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

//3.统一导出时使用as关键字给变量起别名
export { name as bName, age as bAge, sum as bSum, Person as BPerson };
