/**
 * Object.prototype.hasOwnProperty()
 * hasOwnProperty() 方法会返回一个布尔值，
 * 指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。
 */
const person = {
  name: '小名',
  age: 30
}


//创建一个以Person.prototype为[[prototype]]原型对象的新对象，并给新对象添加一个address属性
const p1 = Object.create(person, {
  address: {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "北京",
  },
});

console.log(p1) //Person { address: '北京' }

console.log(p1.hasOwnProperty('address')) //true
console.log(p1.hasOwnProperty("name")) //false


/**
 * in  / for in 
 * 判断某个属性是否在某个对象或对象的[[prototype]]原型对象上
 */

console.log('name' in p1) //true  name在p1的[[prototype]]原型对象person上
console.log('address' in p1) //true

