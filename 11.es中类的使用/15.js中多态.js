var obj = {
  getArea() {
    console.log(200);
  },
};
class Person {
  getArea() {
    return 100;
  }
}
const p = new Person();

function calcArea(o) {
  console.log(o.getArea());
}

calcArea(obj)
calcArea(p)

function sum(a,b) {
  return a + b
}
sum(1,2)
sum('1', '2')