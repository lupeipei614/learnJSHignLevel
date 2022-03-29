/**
 * 字符串的replace方法，只替换找到的第一个符合的字符串
 * replaceAll会找到所有符合的字符串，然后都替换掉
 */

const str = "I love my china. I love my home";
console.log(str.replaceAll("I", "You")); //You love my china. You love my home
console.log(str.replace("I", "You")); //You love my china. I love my home


//ES12新增了数字连接符_
console.log(123_0000_0000) //12300000000