!function(){
  
  var view = document.querySelector('#mySlides')
  var controller = (view)=>{
    var mySwiper = new Swiper (view.querySelector('.swiper-container'), {
      loop: true, //循环轮播

      pagination: {
        el: '.swiper-pagination',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  }
  
  controller(view)
}.call()

