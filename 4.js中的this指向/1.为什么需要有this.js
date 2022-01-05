//this用于：当对象的方法被调用时，在被调用的方法中获取调用当前方法的对象
function Person(name) {
  this.name = name;
  this.eatting = function () {
    console.log(this.name + "在吃东西");
  };
  this.running = function () {
    console.log(this.name + "在奔跑");
  };
  this.studying = function () {
    console.log(this.name + "在学习");
  };
}

var why = new Person("why");
why.eatting();
why.studying();
why.running();
var lily = new Person("lily");
lily.eatting();
lily.studying();
lily.running();
