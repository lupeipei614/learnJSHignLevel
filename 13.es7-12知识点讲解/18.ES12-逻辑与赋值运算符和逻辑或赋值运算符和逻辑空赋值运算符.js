//  ||=   当逻辑或赋值运算符前面的变量foo值转换为布尔值为false时，变量foo的值被赋值为'aaa'，否则，依然为其本身

let foo = ''
foo ||= 'aaa'
console.log(foo) //aaa


//  &&= 当逻辑与赋值运算符前面的变量bar1值转换为布尔值为true时，变量bar1的值被赋值为'bbb'，否则，依然为其本身
let bar1 = 0
bar1 &&= 'bbb'
console.log(bar1) //0

let bar2 = 10
bar2 &&= 'bbb'
console.log(bar2) //bbb

//  ??= 当逻辑空赋值运算符前面的变量baz1值转换为null或undefined时，变量baz1的值被赋值为'ccc'，否则，依然为其本身
let baz1 = NaN
baz1 ??= 'ccc'
console.log(baz1) //NaN

let baz2 = undefined
baz2 ??= 'ccc'
console.log(baz2) //ccc

let baz3 = null
baz3 ??= 'ccc'
console.log(baz3) //ccc
