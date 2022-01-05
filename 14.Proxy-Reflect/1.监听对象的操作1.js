/**
 * 有一个对象，我们希望监听这个对象中的属性被设置或获取的过程
 * 下面实现的弊端：
 *    如果我们想监听对对象更加丰富的操作，比如新增属性，删除属性，那么Object.defineProperty是无能为力的
 */

const obj = {
  name: "coderwhy",
  age: 18,
};

Object.keys(obj).forEach((key) => {
  let value = obj[key];
  Object.defineProperty(obj, key, {
    set: function (newVal) {
      value = newVal;
      console.log(`监听到给${key}属性设置值`);
    },
    get: function () {
      console.log(`监听到获取${key}属性的值`);
      return value;
    },
  });
});

console.log(obj.name);
obj.age = 30;

// 监听到获取name属性的值
// coderwhy
// 监听到给age属性设置值
