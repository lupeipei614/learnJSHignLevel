//下面封装一个Student类和Teacher类,我们会发现,这两个类的封装过程中有很多重复的代码和逻辑
//如果在项目中需要封装100个类型的类,比如清洁工,园丁,门卫...,那项目中会有大量的重复代码,
//而面向对象的继承特性正可以减少重复代码的数量，增加对代码的复用
function Student(name, age, num) {
  this.name = name
  this.age = age
  this.num = num
}
Student.prototype.running = function () {
  console.log(this.name + 'is running')
}
Student.prototype.eatting = function () {
  console.log(this.name + "is eatting")
}
Student.prototype.studing = function () {
  console.log(this.name + 'is studing')
}

function Teacher(name, age, title) {
  this.name = name
  this.age = age
  this.title = title
}
Teacher.prototype.running = function () {
  console.log(this.name + 'is running')
}
Teacher.prototype.eatting = function () {
  console.log(this.name + "is eatting")
}
Teacher.prototype.teaching = function () {
  console.log(this.name + 'is teaching')
}