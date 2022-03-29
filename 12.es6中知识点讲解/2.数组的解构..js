const names = ["abc", "cba", "bac"];

//数组的解构是按照顺序赋值的
const [item1, item2, item3] = names;
console.log(item1, item2, item3); //abc cba bac

//只解构最后一个值
const [, , itemz] = names;
console.log(itemz); //bac

//解构时设置默认值
const [itema, itemb, itemc,itemd] = names;
console.log(itema, itemb, itemc,itemd) //abc cba bac undefined
const [itema1, itemb1, itemc1,itemd1 = 'bbb'] = names;
console.log(itema1, itemb1, itemc1,itemd1) //abc cba bac bbb

//只解构第一个，其余的放在一个数组中
const [item5, ...newNames] = names
console.log(item5, newNames) //abc [ 'cba', 'bac' ]
