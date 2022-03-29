//展开运算符进行的是浅拷贝
const info = { name: "why", age: 18, friend: { name: "kobe" } };
const newInfo = { ...info };

newInfo.friend.name = "lily";

console.log(info.friend.name); //lily
