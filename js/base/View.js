window.View = function(selector){//这里使用 window 全局属性是让别的文件也可以访问使用
  return document.querySelector(selector)
}
