/**
 * import导入的四种方式：
 *
 */

//方式一：
import { name, age, sum, Person } from "./foo.js";
console.log(name, age);

sum(1, 2);

const person = new Person("lily");
console.log(person);

import { bName, bAge, bSum, BPerson } from "./baz.js";
console.log(bName, bAge);

bSum(1, 2);

const person1 = new BPerson("lily");
console.log(person1);

// 方式二：导入变量时给变量起别名
import {
  name as barName,
  age as barAge,
  sum as barSum,
  Person as BarPerson,
} from "./bar.js";
console.log(barName, barAge);

barSum(1, 2);

const person3 = new BarPerson("lily");
console.log(person3);

//方式三：整体导入并起别名
import * as baz from "./baz.js";
console.log(baz.name, baz.age);

baz.sum(1, 2);

const person2 = new baz.Person("lily");
console.log(person2);

//方式四：导入模块默认导出的变量
import height from "./demo.js";
console.log(height);
