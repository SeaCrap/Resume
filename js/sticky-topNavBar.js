//简单版
!function(){
  var view = document.querySelector('#topNavBar')
  // 生成 controller 对象
  var controller = {     
    //有一个 view（为空）
    view: null,
    //有一个 init 方法
    init: function(view){ 
      //把 view 存在自己的 view 里边。
      //现在 view 不为空了 这里的 view是下边controller.init(view)传进来的 
      this.view = view
      //绑定事件
      //this.bindEvents() 等价于 this.bindEvents.call(this) 把当前this作为里边的this
      this.bindEvents() 
    },
    bindEvents:function(){
      //这里的this 需要做两次判断
      //判断1：这里的 this 在bindEvents 里边的 this.bindEvents.call(this)
      //判断2：bindEvents 里的 this 是 init 里边的 
      //this init() 里的 this 是由下边 controller.init.call(controller,view)的 this 也就是 controller
      //这里的 view 就是上边 view: null 的 view
      var view = this.view       
      window.addEventListener('scroll',(e)=>{
        if(window.scrollY > 0){
          view.classList.add('sticky')
        }else{
          view.classList.remove('sticky')
        }
      })
    }

  }
   
  controller.init(view)
  //controller.init.call(controller,view) this 就是 controller
  //如果一个对象调用一个函数 这个对象就是函数内的 this 
  //所以这里的view就决定了上边 this.view = view 里的 this 就是 controller
}.call()

//① 生成 controller 对象
//② 初始化
//③ 绑定事件

