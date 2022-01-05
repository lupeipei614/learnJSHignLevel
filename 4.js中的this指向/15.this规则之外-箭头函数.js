//箭头函数之前的解决方案
var obj = {
  data: [],
  getData: function () {
    const _this = this;
    setTimeout(function () {
      //setTimeout回调函数执行上下文中的this为window
      var result = ["abc", "bac"];
      _this.data = result;
    }, 1000);
  },
};

//使用箭头函数
var obj = {
  data: [],
  getData: function () {
    setTimeout(() => {
      //setTimeout回调函数为箭头函数，
      //因为箭头函数并不绑定this对象，那么this引用就会从上层作用域中找到对应的this
      var result = ["abc", "bac"];
      this.data = result;
    }, 1000);
  },
};
