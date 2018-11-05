!function xxx(){
  let specialTags = document.querySelectorAll('[data-x]')
  for(let i=0; i<specialTags.length; i++){
    specialTags[i].classList.add('offset')
  }

  setTimeout (function(){
    findClosetAndRemoveOffset()
  },500)

  window.addEventListener('scroll',(e)=>{
    findClosetAndRemoveOffset()
  })

  function findClosetAndRemoveOffset(){
    //找距窗口最近模块
    let specialTags = document.querySelectorAll('[data-x]')// 找到所有包含标记data-x的模块；div[data-x]:找到所有标记data-x的div
    let minIndex = 0 //从第0个开始
    for(let i=1; i<specialTags.length; i++){//这里遍历就要从第1个开始
      if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
        minIndex = i
      }
    }
    specialTags[minIndex].classList.remove('offset')//模块过度效果

    //找a标签
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]')//通过 id 获取当前最小模块
    let li = a.parentNode //找当前a标签父元素li
    //找到所有li包括自己
    let brothersAndMe = li.parentNode.children
    for(let i=0; i<brothersAndMe.length; i++){
      brothersAndMe[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
  }
 
}.call()
