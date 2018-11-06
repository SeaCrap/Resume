//简单版
!function(){
  var view = document.querySelector('#topNavBar')
  
  view.style.border = '1px solid red'
  
  var controller = (view)=>{
    window.addEventListener('scroll',(e)=>{
      if(window.scrollY > 0){
        view.classList.add('sticky')
      }else{
        view.classList.remove('sticky')
      }
    })
  }

  //controller.call(null,view) 用call
  controller(view)
}.call()

//首先生成了一个 view 对象 然后生成了一个 controller 对象
//用 controller 调用 view
//PS: 调用 controller 给他传入一个 view


