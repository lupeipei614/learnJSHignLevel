/**
 * 案例：创建一个Classroom类
 * 教室中有自己的位置，名称，当前教室的学生
 * 这个教室可以进来新学生(add)
 * 创建的教室对象都是可迭代对象
 */
class Classroom {
  constructor(name, address, students) {
    this.name = name;
    this.address = address;
    this.students = students;
  }

  add(stu) {
    this.students.push(stu);
  }

  [Symbol.iterator] = function () {
    let index = 0;
    return {
      next: () => {
        if (index < this.students.length) {
          return { done: false, value: this.students[index++] };
        } else {
          return { done: true };
        }
      },
      // 监听迭代器被提前终止，正常终止监听不到
      return: () => {
        console.log("监听到迭代器终止了");
        return { done: true };
      },
    };
  };
}

const classroom = new Classroom("测控技术与仪器", "226", [
  "lily",
  "koby",
  "curry",
]);
for (const stu of classroom) {
  console.log(stu);
  if (stu === "koby") break;
}

// lily
// koby
// 监听到迭代器终止了

/**
 * **迭代器在某些情况下会在没有完全迭代的情况下中断：
 * 比如遍历的过程中通过break、continue、return、throw中断了循环操作
 * 比如在解构的时候，没有完全解构
 * 那么这个时候我们想要监听中断的话，可以添加return方法
 * 
 */


