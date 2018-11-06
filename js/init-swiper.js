!function(){
  
  var view = document.querySelector('#mySlides')
  var controller = {
    view: null,
    swiper: null, //用到了this.swiper 初始化一下swiper
    init: function(view){
      this.view = view //接受到view存起来
      this.initSwiper() //绑定事件
    },
    initSwiper: function(){
      this.wiper = new Swiper (view.querySelector('.swiper-container'), {
        loop: true, 

        pagination: {
          el: '.swiper-pagination',
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    }
  }
  
  controller.init(view)
}.call()

