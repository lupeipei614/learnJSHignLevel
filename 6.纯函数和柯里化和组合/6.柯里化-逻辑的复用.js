function sum(num1, num2) {
  return num1 + num2
}
//如果需要多次把一个数字和5相加，求值
sum(5, 10)
sum(5, 15)
sum(5, 88)
sum(5, 120)


//使用柯里化
function makeAdder(count) {
  return function(num) {
    return count + num
  }
}

var add5 = makeAdder(5)//这一段逻辑被复用
add5(10)
add5(15)
add5(88)
add5(120)


