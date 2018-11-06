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
      window.addEventListener('scroll',(e)=>{
        if(window.scrollY > 0){
         this // 此时的 this 是用户滚动的元素 所以要绑定 this 这样的this才是自己需要改变的
        }else{
          view.classList.remove('sticky')
        }
      }.bind(this)) //绑定 this
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

