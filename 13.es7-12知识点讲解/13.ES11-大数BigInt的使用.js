
/**
 * 最大安全数字Number.Number.MAX_SAFE_INTEGER
 * 在早期的JavaScript中，我们不能正确的表示过大的数字：
 *  大于MAX_SAFE_INTEGER的数值，表示的可能是不正确的
 */


console.log(Number.MAX_SAFE_INTEGER) //9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1) //9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 2) //9007199254740992 计算并不正确


//那么ES11中，引入了新的数据类型BigInt，用于表示大的整数：
//BitInt的表示方法是在数值的后面加上n

console.log(90071992547409901) //90071992547409900 输出错误
console.log(90071992547409901n) //90071992547409901n 大数输出正确

//BigInt数据类型和Number类型数组进行运算，需要显示的统一类型
const bigNum = 90071992547409901n
const bigNum1 = 999n
const num = 10
console.log(bigNum + BigInt(num)) // 90071992547409911n

//把BigInt数据类型转换为Number类型
console.log(Number(bigNum1) + num) //1009

