// 4.下面代码的运行，输出的结果是：
// const a = Symbol.for('aaa')
// const obj = {
//   [a]: "kobe",
//   [a]: 40,
//   [Symbol('aaa')]: "北京",
// };
console.log(Symbol.for("foo") === Symbol.for("foo"))
// A:{ [Symbol(aaa)]: 'kobe', [Symbol(aaa)]: 40, [Symbol(aaa)]: '北京' }  B:{ [Symbol(aaa)]: '北京' }
