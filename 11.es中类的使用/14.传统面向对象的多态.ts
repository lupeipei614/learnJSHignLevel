//面向对象的三大特性：封装，继承，多态
//多态：不同的数据类型，进行同一个操作，表现出不同的不同的行为，就是多态的体现

//传统面向对象的多态有三个前提：
// 必须有继承（多态的前提），必须有重写（子类重写父类方法），必须有父类引用指向子类对象
class Shape {
  getArea() {
    console.log("获取shape面积");
  }
}
class Rectangle extends Shape {
  getArea() {
    return 100;
  }
}
class Circle extends Shape {
  getArea() {
    return 1000;
  }
}

function calcArea(shape: Shape) {
  console.log(shape.getArea());
}

const r = new Rectangle();
const ss = new Circle();
calcArea(r); // 100
calcArea(ss); // 1000

export {}
