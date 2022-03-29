// 1.if语句的代码块是有块级作用域的
const flag = true;
if (flag) {
  var foo = 123;
  let bar = 456;
}
console.log(foo); //123
console.log(bar); // Uncaught ReferenceError: bar is not defined

// 2.switch语句的代码块是有块级作用域的
const color = "red";
switch (color) {
  case "red":
    let bg = "red";
    break;
  default:
    break;
}
console.log(bg); // Uncaught ReferenceError: bg is not defined

// 3.for循环的代码块是有块级作用域的
for (let i = 0; i < 10; i++) {
  console.log("btn", i);
}
console.log(i) // Uncaught ReferenceError: i is not defined

for (var j = 0; j < 10; j++) {
  console.log("btn1", j);
}
console.log(j) //10
