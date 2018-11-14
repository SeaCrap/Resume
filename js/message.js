!function(){
  var view = document.querySelector('section.message') 

  var controller = {
    view: null,
    messageList: null,
    init: function(view){
      this.view = view
      this.messageList = view.querySelector('#messageList')
      this.form = view.querySelector('form')
      this.initAV()
      this.loadMessages()
      this.bindEvents()
    },
    //初始化AV
    initAV: function(){
      var APP_ID = '4z3xOPBFrVM3sTXGGPQ1DuNJ-gzGzoHsz';
      var APP_KEY = 'u86ebQHzADzbAxBPUOHItGPN';

      AV.init({ appId: APP_ID, appKey: APP_KEY})
    },
    //加载message
    loadMessages: function(){
      //存数据并把数据显示到ol中
      var query = new AV.Query('Message');//初始化AV对象
      query.find()//查找messages
        .then(
          //查找成功把messages放到ol里
          (messages)=>{ //这里使用箭头函数，要确保this对外不变
            let arry = messages.map((item)=> item.attributes)
            arry.forEach((item)=>{
              let li = document.createElement('li')
              li.innerText = `${item.name}: ${item.content}`//读 name 和 content
              //这是避免生成全局变量而这只的局部变量
              //let messgaeList = document.querySelector('#messageList')
              this.messageList.appendChild(li)
            })
          }
        )   
    },
    
    //这里除了绑定事件什么也不做 把获取message和提交message分离出去
    bindEvents: function(){
      //监听submit 提交
      this.form.addEventListener('submit', function(e){
        //阻止默认事件 防止刷新页面
        e.preventDefault()
        this.saveMessage()
      })
    },
    
    //获取/保存/展示留言
    saveMessage: function(){
      //下面好多使用到了Myform 这里可以声明一下
      let myForm = this.form

      //获取
      //content 是获取 name=content 的 input 的 value
      let content = myForm.querySelector('input[name=content]').value
      let name = myForm.querySelector('input[name=name]').value
      var Message = AV.Object.extend('Message');
      var message = new Message();
      //保存
      message.save({
        'name': name, //存name
        'content': content //存 content
      }).then(function(object) {
        //展示
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}: ${object.attributes.content}`//读 name 和 content
        //这是避免生成全局变量而这只的局部变量
        let messgaeList = document.querySelector('#messageList')
        messageList.appendChild(li)
        myForm.querySelector('input[name=content]').value = ''//清楚输入内容：用户提交之后 value为空
      })
    }
  }
  controller.init(view)
}.call()


