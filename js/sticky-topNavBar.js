!function(){
  var view = document.querySelector('#topNavBar')
  view.style.border = '1px solid red'
  window.addEventListener('scroll',(e)=>{
    if(window.scrollY > 0){
      view.classList.add('sticky')
    }else{
      view.classList.remove('sticky')
    }
  })

}.call()

