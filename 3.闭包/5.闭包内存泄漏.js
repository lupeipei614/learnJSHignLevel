function createFnArray() {
  //占据的内存空间大约为4 * 1024 * 1024 + 其他内容 = 4M+
  var arr = new Array(1024 * 1024).fill(1)
  return function() {
    console.log(arr.length)
  }
}

var arrayFns = []
for(var i = 0; i < 100; i++) {
  setTimeout(() => {
    arrayFns.push(createFnArray())
  }, i * 100)
}

setTimeout(() => {
  for(var i = 0; i < 50; i++) {
    setTimeout(() => {
      arrayFns.pop()
    }, i * 100)
  }
}, 10000)