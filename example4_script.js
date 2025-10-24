// example4_script.js
var input = prompt('請輸入一個整數：');
var n = parseInt(input, 10);
var msg = '';

if (isNaN(n)) {
  msg = '輸入不是有效的整數！';
} else if (n % 2 === 0) {
  msg = n + ' 是偶數';
} else {
  msg = n + ' 是奇數';
}

// switch 範例
var choice = prompt('輸入 1/2/3 試試 switch：');
switch (choice) {
  case '1': msg += '\n你輸入了 1'; break;
  case '2': msg += '\n你輸入了 2'; break;
  case '3': msg += '\n你輸入了 3'; break;
  default: msg += '\n非 1/2/3';
}

// 延伸練習：分數等第判斷
var score = parseInt(prompt('請輸入分數（0-100）：'), 10);
if (!isNaN(score) && score >= 0 && score <= 100) {
  if (score >= 90) msg += '\n等第：A';
  else if (score >= 80) msg += '\n等第：B';
  else if (score >= 70) msg += '\n等第：C';
  else if (score >= 60) msg += '\n等第：D';
  else msg += '\n等第：F';
} else {
  msg += '\n輸入的分數無效';
}

document.getElementById('result').textContent = msg;
