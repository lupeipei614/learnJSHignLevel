function foo() {
  var name = "why"
  var age = 18
  return function() {
    debugger
    console.log(name)
  }
}

var fn = foo()
fn()