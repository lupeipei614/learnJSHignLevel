/**
 * ES10之前，
 *  可以使用trim方法去除字符串头部和尾部空格
 * ES10新增了trimStart和trimEnd
 *  trimStart 去除字符串头部空格
 *  trimEnd 去除字符串尾部空格
 */

const message = "   hello world ";

console.log(message.length); //15
console.log(message.trim(), message.trim().length); //hello world 11
console.log(message.trimStart(), message.trimStart().length); //hello world  12
console.log(message.trimEnd(), message.trimEnd().length); //   hello world 14
