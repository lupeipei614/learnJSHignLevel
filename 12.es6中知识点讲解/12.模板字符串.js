// ES6新增了模板字符串,用于字符串拼接
const name = "why";
const age = 18;
const height = 1.88;

const info = `my name is ${name},age is ${age},height is ${height}.`; //变量
const info1 = `age double is ${age * 2}`; //表达式

function getDoubleAge() {
  return age * 2;
}
const info2 = `double age is ${getDoubleAge()}`; //函数调用
console.log(info)
console.log(info1)
console.log(info2)