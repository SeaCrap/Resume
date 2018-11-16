window.Model = function(options){//options:选项
  let resourceName = options.resourceName //资源名字
  return {
    //初始化AV
    init: function(){
      var APP_ID = '4z3xOPBFrVM3sTXGGPQ1DuNJ-gzGzoHsz';
      var APP_KEY = 'u86ebQHzADzbAxBPUOHItGPN';

      AV.init({ appId: APP_ID, appKey: APP_KEY})
    },
    //下边两个函数使用到了闭包
    fetch: function(){//获取数据
      var query = new AV.Query(resourceName);//初始化AV对象
      return query.find()//返回 Promise 对象
    },
    
    save: function(){// 存储数据      
      var X = AV.Object.extend(resourceName);
      var X = new X();
      //保存
      return X.save(object) //这里接收到的参数很多，会包装成一个对象
    }

  }
}
