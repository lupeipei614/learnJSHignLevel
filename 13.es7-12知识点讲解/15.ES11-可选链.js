//可选链也是ES11中新增一个特性，主要作用是让我们的代码在进行null和undefined判断时更加清晰和简洁：
//可选链前面的值如果是null或undefined，则不再执行后面的，之前返回可选链前面的值
const info = {
  name: 'why'
}

//ES11之前
if(info.friend && info.friend.girlFriend) {
  console.log(info.friend.girlFriend.name)
}

//使用可选链
console.log(info.friend?.girlFriend?.name) //undefined