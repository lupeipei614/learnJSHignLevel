//使用工厂模式创建对象
function createPerson(name, age, sex) {
  var p = {};

  p.name = name;
  p.age = age;
  p.sex = sex;
  p.running = function () {
    console.log(this.name + "is running!");
  };

  return p;
}

var p1 = createPerson("小名", 30, "male");
var p2 = createPerson("小红", 25, "female");
var p3 = createPerson("小丽", 30, "female");
console.log(p1);
console.log(p2);
console.log(p3);

/**
 * 缺点：
 * 这样创建的对象没有标出所属的类别
 * 每创建一个对象，都需要在堆内存中开辟一块新内存，存储创建的running函数对象
 * 如果创建100个对象，就创建了100running函数，就需要100个这样的堆内存来存储100个这样的running函数对象
 */
