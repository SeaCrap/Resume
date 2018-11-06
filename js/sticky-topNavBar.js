//简单版
!function(){
  var view = document.querySelector('#topNavBar')
  var controller = {     
    view: null,
    init: function(view){ 
      this.view = view
      this.bindEvents() 
    },
    bindEvents:function(){
      var view = this.view       
      window.addEventListener('scroll',function(e){
        if(window.scrollY > 0){
         this 
        }else{
          view.classList.remove('sticky')
        }
      }.bind(this))
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

