// example5_script.js
var start = parseInt(prompt('請輸入起始數字（1~9）：'), 10);
var end = parseInt(prompt('請輸入結束數字（1~9）：'), 10);

if (isNaN(start) || isNaN(end) || start < 1 || end > 9 || start > end) {
  document.getElementById('result').textContent = '輸入範圍不正確';
} else {
  var output = '';
  for (var i = start; i <= end; i++) {
    for (var j = 1; j <= 9; j++) {
      output += i + 'x' + j + '=' + (i * j) + '\t';
    }
    output += '\n';
  }
  document.getElementById('result').textContent = output;
}
