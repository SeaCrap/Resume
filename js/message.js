var APP_ID = '4z3xOPBFrVM3sTXGGPQ1DuNJ-gzGzoHsz';
var APP_KEY = 'u86ebQHzADzbAxBPUOHItGPN';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

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
    alert('存入成功')
    console.log(object)
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
