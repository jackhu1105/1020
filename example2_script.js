// example2_script.js
var text = '123';
var num = 45;
var isPass = true;
var emptyValue = null;
var notAssigned;

var lines = '';
lines += 'text = ' + text + '，typeof: ' + (typeof text) + '\n';
lines += 'num = ' + num + '，typeof: ' + (typeof num) + '\n';
lines += 'isPass = ' + isPass + '，typeof: ' + (typeof isPass) + '\n';
lines += 'emptyValue = ' + emptyValue + '，typeof: ' + (typeof emptyValue) + '\n';
lines += 'notAssigned = ' + notAssigned + '，typeof: ' + (typeof notAssigned) + '\n\n';

var textToNumber = parseInt(text, 10);
lines += 'parseInt("123") = ' + textToNumber + '\n';
lines += 'String(45) = ' + String(num) + '\n\n';


var x = prompt('請輸入第一個數字字串：');
var y = prompt('請輸入第二個數字字串：');
var sum = Number(x) + Number(y);
lines += '你輸入的兩個數字相加結果為：' + sum;

document.getElementById('result').textContent = lines;
