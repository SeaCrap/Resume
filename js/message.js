!function(){
  
  var model = Model({ resourceName:'Message'})
  
  var view = View('section.message') 
  
  var controller = {
    view: null,
    messageList: null,
    model: null,
    init: function(view, model){
      this.view = view
      this.model = model
            
      this.messageList = view.querySelector('#messageList')
      this.form = view.querySelector('form')
      this.model.init()
      this.loadMessages()
      this.bindEvents()
    },
   
    //加载message
    loadMessages: function(){
      this.model.fetch().then(
          (messages)=>{ //这里使用箭头函数，要确保this对外不变
            let arry = messages.map((item)=> item.attributes)
            arry.forEach((item)=>{
              let li = document.createElement('li')
              li.innerText = `${item.name}: ${item.content}`
              this.messageList.appendChild(li)
            })
          }
        )   
    },
    
    //这里除了绑定事件什么也不做 把获取message和提交message分离出去
    bindEvents: function(){
      //监听submit 提交
      this.form.addEventListener('submit', (e)=>{
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
      this. model.save({
        'name':name, 'content':content //这里要传入一个对象
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
  controller.init(view, model)
}.call()


