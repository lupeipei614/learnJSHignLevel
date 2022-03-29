// ES6新增了标签字符串
const name = "why";
const age = 18;
const height = 1.88;
function foo(arr, arg1, arg2, arg3) {
  console.log(arr, arg1, arg2, arg3);
}
foo``; //[ '' ] undefined undefined undefined
foo`my name is ${name},age is ${age},height is ${height}`; //[ 'my name is ', ',age is ', ',height is ', '' ] why 18 1.88
foo`my name is ${name},double age is ${age * 2},height is ${height}`; //[ 'my name is ', ',double age is ', ',height is ', '' ] why 36 1.88
//标签模板字符串一下结果：
//函数的第一个参数为数组，是模板字符串中的字符串被${}切割成的数组
//除了第一个后的参数依次为模板字符串中${}的值
