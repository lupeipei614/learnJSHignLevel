/**
 * export导出的几种方式：
 *  1.变量在声明时直接导出，即export后跟变量声明语句
 *  2.变量声明后，统一导出
 *  3.统一导出时起别名
 * 4.export default 默认导出
 */
// 1.变量在声明时直接导出，即export后跟变量声明语句
export const name = "why";
export const age = 18;

export function sum(a, b) {
  return a + b;
}

export class Person {
  constructor(name) {
    this.name = name;
  }
}
