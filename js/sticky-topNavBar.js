window.addEventListener('scroll',(e)=>{
    if(window.scrollY > 0){
      topNavBar.classList.add('sticky')
    }else{
      topNavBar.classList.remove('sticky')
    }
  })
