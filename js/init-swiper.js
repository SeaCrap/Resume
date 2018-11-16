!function(){
  var view = View('#mySlides')
  var controller = {
    //controller三个重要属性和一个 init 方法。view/swiper/swiperOptions/init()
    view: null,
    swiper: null, //用到了this.swiper 初始化一下swiper
    swiperOptions:{ loop: true, 
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
    
    init: function(view){
      this.view = view //接受到view存起来
      this.initSwiper() //初始化 swiper
    },
    initSwiper: function(){
      this.swiper = new Swiper (
        this.view.querySelector('.swiper-container'), 
        this.swiperOptions //选项上边已经记下来了
      ) 
    }
  }

  controller.init(view)
}.call()

