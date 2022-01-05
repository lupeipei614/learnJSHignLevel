function foo() {
  console.log(this); 
}
var obj = {
  name: "why",
  foo: foo
};
foo() //this -> window
obj.foo() //this -> obj;
foo.call('call') // this -> String{"call"}