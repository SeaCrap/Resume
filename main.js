window.onscroll = (e)=>{
  if(window.scrollY > 0){
    topNavBar.classList.add('sticky')
  }else{
    topNavBar.classList.remove('sticky')
  }
}


let liTags = document.getElementsByClassName('menuTigger')
console.log(liTags)
for(let i=0; i<liTags.length; i++){
  liTags[i].onmouseenter = function(e){
    console.log(e.currentTarget)
    let li = e.currentTarget
    let brother = li.getElementsByTagName('UL')[0]
    console.log(brother)
    brother.classList.add('active')
  }
}  
