!function(){
  //导航下拉菜单以及动画效果
  let liTags = document.querySelectorAll('nav.menu ul li')
  for(let i=0; i<liTags.length; i++){
    liTags[i].onmouseenter = (e)=>{
      e.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function(e){
      e.currentTarget.classList.remove('active')
    }
  } 
  //滚动到指定模块
  let aTags = document.querySelectorAll('nav.menu ul li a') 

  //TWEEN.js代码
  function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
  }

  requestAnimationFrame(animate); 

  for(let i=0; i < aTags.length; i++){
    aTags[i].onclick = (e)=>{
      e.preventDefault() 
      let top = document.querySelector(e.currentTarget.getAttribute('href')).offsetTop
      let currentTop = window.scrollY
      let targetTop = top - 80
      let s = targetTop - currentTop
      let t = Math.abs((s/100)*300) //时间不能为负 求绝对正值
      if(t>500){ t = 500}
      //TWEEN.js代码
      var coords = { y: currentTop}; //初始top 
      var tween = new TWEEN.Tween(coords) 
        .to({ y: targetTop}, t) 
        .easing(TWEEN.Easing.Quadratic.InOut) //加速再减速 
        .onUpdate(function() { // 
          window.scrollTo(0,coords.y)
        })
        .start();
    }
  }
}.call()

