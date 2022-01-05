//打印日志的柯里化
function log(date, type, message) {
  console.log(`[${date.getHours()}:${date.getMinutes()}]:[${type}]:[${message}]`)
}

//每次都需要输入时间，类型，信息，即使时间一样
log(new Date(), "DEBUG", "查询轮播图的bug")
log(new Date(), "DEBUG", "查询菜单的bug")
log(new Date(), "DEBUG", "查询列表的bug")

var log1 = date => type => message => {
  console.log(`[${date.getHours()}:${date.getMinutes()}]:[${type}]:[${message}]`)
}
//如果我现在打印的都是当前时间，
var nowLog = log1(new Date())
//只需要输入类型和信息
nowLog("DEBUG", "查询轮播图的bug")
nowLog("FETURE", "添加了新用户功能")
nowLog("FIX", "修复了菜单问题")

//如果我现在打印的都是当前时间的bug
var nowDebugLog = log1(new Date())("DEBUG")
//只需要输入信息
nowDebugLog("查询轮播图的bug")
nowDebugLog("查询菜单的bug")
nowDebugLog("查询列表的bug")