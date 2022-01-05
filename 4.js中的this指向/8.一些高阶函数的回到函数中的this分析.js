//模拟setTimeout函数的实现
function hySetTimeout(callback, duration) {
  callback();
}
//setTimeout函数的回调函数在其内部是被独立调用的，
//所以，回调函数执行时创建的执行上下文中的this指向window
setTimeout(function () {
  console.log(this); //this=> window
}, 3000);

//当js引擎监听到boxDiv被点击时，会调用boxDiv.onClick(),
//onClick函数执行上下文内部的this被隐式绑定为触发事件的DOM元素对象
var boxDiv = document.querySelector(".box");
boxDiv.onClick = function () {
  console.log(this); //this -> boxDiv
};

var box1Div = document.querySelector(".box1");
box1Div.addEventListener("click", function () {
  console.log(this); //this-> box1Div
});
box1Div.addEventListener("click", function () {
  console.log(this); //this-> box1Div
});
box1Div.addEventListener("click", function () {
  console.log(this); //this-> box1Div
});

// var eventMap = new Map();
// HTMLDivElement.prototype.addEventListener = function (eventType, eventFn) {
//   var eventArray = eventMap.get(eventType);
//   if (!eventArray) {
//     eventMap.set(eventType, new Set());
//   } else {
//     //把监听函数添加到事件数组
//     eventArray.add(eventFn);
//   }
// };
// //当监听到事件触发时，迭代eventArray中的函数，
// eventMap.get("click").forEach((fn) => {
//   fn.call(box1Div);
// });

//forEach/map/filter/find
var names = ["lily", "why", "kobe"];
names.forEach(function (item) {
  console.log(item, this); //this -> window
});
names.map(function (item) {
  console.log(item, this); //this -> window
});

//forEach/map回调函数执行时的执行上下文中this会被显示绑定到第二个参数对象
//如果第二个参数不为对象，会转换为对象
names.forEach(function (item) {
  console.log(item, this); //this -> String{"abc"}
}, "abc");
names.map(function (item) {
  console.log(item, this); //this -> String{"abc"}
}, "abc");
