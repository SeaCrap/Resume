var APP_ID = '4z3xOPBFrVM3sTXGGPQ1DuNJ-gzGzoHsz';
var APP_KEY = 'u86ebQHzADzbAxBPUOHItGPN';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

//存数据并把数据显示到ol中
var query = new AV.Query('Message');//初始化AV对象
query.find()//查找messages
  .then(
    //查找成功把messages放到ol里
    function (messages) {
      console.log(messages)
      console.log(messages[0].attributes)
      console.log(messages[1].attributes)
      let arry = messages.map((item)=> item.attributes)
      arry.forEach((item)=>{
        let li = document.createElement('li')
        li.innerText = item.content 
        //这是避免生成全局变量而这只的局部变量
        let messgaeList = document.querySelector('#messageList')
        messageList.appendChild(li)
      })
    }, 
    //查找失败提交此error
    function (error) {
      //这里是find函数的异常处理
    })
    .then(()=>{},(error)=>{
      //这里是arry.forEach函数的异常处理
    })









//监听submit 提交
let myForm = document.querySelector('#postMessageFrom')
myForm.addEventListener('submit', function(e){
  //阻止默认事件 防止刷新页面
  e.preventDefault()
  //content 是获取 name=content 的 input 的 value
  let content = myForm.querySelector('input[name=content]').value
  var Message = AV.Object.extend('Message');
  var message = new Message();
  message.save({
    'content': content
  }).then(function(object) {
    window.location.reload()//帮用户刷新页面
  })
})

















/*
  //创建 TestObject 表
var X = AV.Object.extend('HuaXie');//TestObject 是 leancloud创建的类名(对应的表名)
//在表中创建一行数据
var O = new X();
//数据内容是 words: 'Hello world' 保存
//如果保存成功 运行 alert('LeanCloud Rocks!')

O.save({
  xxx: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
}).then(function(){
  console.log(arguments[0])
})
*/
