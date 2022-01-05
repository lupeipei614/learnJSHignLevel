/**
 * Object.create(targetPrototype)
 * 创建一个[[prototope]]原型对象为指定对象的新对象并返回
 */

var p = {
  running: function() {
    console.log(this.name + ' is running')
  }
}

var newPerson = Object.create(p)
newPerson.name = 'why'
newPerson.running() //why is running
//先在newPerson对象上找running，没有找到，
//再通过newPerson.__proto__去newPerson的[[prototype]]原型对象上找,找到了，则返回其值


/**
 * Object.getPrototypeOf(targetObj)
 * 返回指定对象的内置属性[[prototype]]原型对象
 * 
 */

var info = {name: 'why'}
//创建一个以info对象作为[[prototype]]原型对象的新对象newObj
var newObj = Object.create(info)
//获取newObj的[[prototype]]原型对象
var newObjPrototype = Object.getPrototypeOf(newObj)

console.log(newObjPrototype === info) //true


/**
 * Object.setPrototypeOf(targetObje, newPrototype)
 * 设置一个指定的对象的[[prototype]]原型对象重新指向另一个对象或null
 */
 var dict = Object.setPrototypeOf({}, null);
 console.log(Object.getPrototypeOf(dict)) //null