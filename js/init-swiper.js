//console.log(window.Swiper) //检验轮播有没有引入成功 把给window添加的Sriper对象打出来

  //初始化Swripe
  var mySwiper = new Swiper ('.swiper-container', {
    // 垂直轮播
    //direction: 'vertical',
    loop: true, //循环轮播

    //分页
    pagination: {
      el: '.swiper-pagination',
    },

    // 上下按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // 滚动条
    //scrollbar: {
    //el: '.swiper-scrollbar',
    //},
  })

