// example1_script.js
alert('歡迎來到 JavaScript！');
console.log('Hello JavaScript from console');

var el = document.getElementById('result');
el.textContent = '這行文字是由外部 JS 檔案寫入的。\n姓名：王小明，學號：A1234567';


var btn = document.getElementById('helloBtn');
btn.addEventListener('click', function() {
  alert('你按下了按鈕！Hello again!');
});
