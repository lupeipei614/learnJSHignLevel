Function.prototype.slice = function (start, end) {
  //获取调用slice的数组
  var arr = this;
  start = start || 0;
  end = end || arr.length;
  var newArray = [];
  //遍历数组
  for (var i = start; i < end; i++) {
    newArray.push(arr[i]);
  }
  return newArray;
};

var nums = [1, 2, 3, 4];
console.log(nums.slice(1, 3));
