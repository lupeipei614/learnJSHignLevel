/**
 * 对象的继承：让一个对象A继承另一个对象B，即让对象A的[[prototype]]原型对象指向那个要继承的对象B
 * 这样，在对象A上访问属性时，如果在当前对象上找不到，回去其[[prototype]]原型对象B上找
 */

//封装一个方法，生成一个[[prototype]]原型对象指向制定对象的对象

var prop = {
  running() {
    console.log(this.name + "is running");
  },
};

//寄生式继承：原型和工厂函数的组合，创建的对象不会显示出所属的类
function createStudent(proObj, name) {
  var obj = Object.create(proObj);
  obj.name = name;
  obj.walk = function () {
    console.log(this.name + "is walking");
  };
  return obj;
}
var newObj = createStudent(prop, "小红");
var newObj = createStudent(prop, "小明");
var newObj = createStudent(prop, "小丽");
