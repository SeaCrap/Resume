window.Controller = function(options){
  // ①
  //这里的 init 是传入的 
  //通过看 message.js 我们可以看到 init() 中三行代码( this.messageList … ) 其中 this 就是这里的 object 
  // object 并没有这三个属性 所以要遍历 options (在 ③  处) 把这三行代码(options) 放到 object 
  var init = options.init 
  
  let object = {// options 接收到的属性都要放在这个对象上
    view: null,
    model: null,
    init: function(view, model){ 
      this.view = view
      this.model = model
      this.model.init()
      
      // ②
      //下边两行有执行顺序 不能颠倒
      //这里 object 的 init() 调用 options 的 init() 并把 object 当做 this 传入
      // this 是 init 的第一个参数  init 调的时候传入的参数是 controller(message.js(controller.init(view,model))) 
      // controller 是 Controller 返回的 Controller return 的是 object
      init.call(this,view, model)      
      this.bindEvents.call(this) 
    },
   }
  // ③
  //遍历 options init 上边已经记下 遍历的 key 不是 init 就放到 object 
  for(let key in options){ 
    if(key !== 'init'){
      object[key] = options[key]
    }
  }
  return object
}


//使用：
//① 需要传入一个初始化init()，这里的初始化init()初始化完之后再调用传入的初始化init()
//② 需要传入一个绑定事件bindEvents()，然后会在这里的初始化中调用bindEvents()
