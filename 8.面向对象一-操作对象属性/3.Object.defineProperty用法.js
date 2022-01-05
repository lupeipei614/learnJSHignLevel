var obj = {
  name: "kobe",
  age: 40,
};


/**
 * Object.defineProperty(obj, property, descritor)
 * obj为操作的目标对象
 * property为操作的目标对象的属性
 * descritor为属性描述符
 */

//使用下面方式给obj添加的height属性是不可枚举的，
//即console.log的时候，不会显示这个属性，
//for in的时候，不会遍历这个属性，
//Object.keys时也没用这个属性，
//但是可以通过obj.height获取到
Object.defineProperty(obj, "height", {
  value: 1.88,
});

console.log(obj); //{name: "kobe", age: 40}
console.log(obj.height); //1.88
