/**
 *
 * await关键字只能用在async异步函数中
 * await关键字后面一般跟一个返回promise对象的表达式
 * 当此promise对象的状态变为fulfilled，await表达式会返回fulfulled回调接收的参数, await下面的代码才会执行
 * 当此promise对象的状态没有变成fulfilled, await下面的代码不会执行
 * await下面的代码相当于是在fulfilled回到中执行的
 *
 * await后跟上其他值
 *  如果跟上普通值，会立即作为await表达式的返回值返回
 *  如果跟上实现了then接口的对象，该对象的then方法会立即执行，then的resolve函数调用时的参数会作为await表达式的返回值返回
 *
 * 如果await跟的表达式返回的promise对象的状态变成了rejected,则整个异步函数返回的promise对象的状态也会变为rejected,
 * rejected回调的参数会作为整个异步函数返回的promise对象的rejected回调的参数
 */

function requestData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(111);
    }, 3000);
  });
}

async function getListData() {
  const res = await requestData();
  console.log(res); // 111
}

getListData();

// 111

//await后跟普通值
async function getListData1() {
  const res = await 100;
  console.log(res); // 100
}

getListData1();

//await后跟实现了then方法的对象
async function getListData2() {
  const res = await {
    then(resolve, reject) {
      resolve(200);
    },
  };
  console.log(res); // 200
}

getListData2();
