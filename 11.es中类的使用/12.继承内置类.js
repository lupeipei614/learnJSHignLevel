//定义类的时候，如果没有实现继承，默认继承自Object类
class Person {}
//相当于下面
// class Person extends Object {}

//继承内置类
class HYArray extends Array {
  firstItem() {
    return this[0];
  }
  lastItem() {
    return this[this.length - 1];
  }
}
const arr = new HYArray(1, 2, 3);
console.log(arr.firstItem()); //1
console.log(arr.lastItem()); //3
