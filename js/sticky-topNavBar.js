//简单版
!function(){
  var view = window.View('#topNavBar')//这里window可以省略 
  var controller = {     
    view: null,
    init: function(view){ 
      this.view = view
      this.bindEvents() 
    },
    bindEvents:function(){
      var view = this.view       
      window.addEventListener('scroll',(e)=>{ //箭头函数没有 this 箭头函数内外 this 不变
        if(window.scrollY > 0){
          this.active() //所以这里的 this 相当于一个变量 在上一级找到了 var.view = this.view 
        }else{
          this.deactive()
        }
      })
    },
    active: function(){
      this.view.classList.add('sticky')
    },
    deactive: function(){
      this.view.classList.remove('sticky')
    }

  }
   
  controller.init(view)
}.call()

//① 生成 controller 对象
//② 初始化
//③ 绑定事件

