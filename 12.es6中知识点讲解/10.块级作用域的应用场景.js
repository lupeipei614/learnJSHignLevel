const btns = document.getElementsByTagName("button");

//总共有四个按钮，下面代码的实现，会使不管哪个按钮被点击，都输出第4个按钮被点击,
// 因为块级作用域对var声明的变量无效
// for (var i = 0; i < btns.length; i++) {
//   btns[i].onclick = function () {
//     console.log("第" + i + "个按钮被点击");
//   };
// }

//在es6的块级作用域出现之前，使用立即执行函数实现，因为函数有作用域.那时的作用域也只有全局作用域和函数作用域
// for (var i = 0; i < btns.length; i++) {
//   (function (n) {
//     btns[n].onclick = function () {
//       console.log("第" + n + "个按钮被点击");
//     };
//   })(i);
// }

//有了es6的块级作用域后，这种问题就很容易被解决
for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    console.log("第" + i + "个按钮被点击");
  };
}
