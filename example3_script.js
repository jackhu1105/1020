// example3_script.js
var name = prompt('請輸入你的名字：');
if (!name) name = '同學';

var a = prompt('請輸入數字 A：');
var b = prompt('請輸入數字 B：');
var numA = parseFloat(a);
var numB = parseFloat(b);

var output = '';
output += '哈囉，' + name + '！\n\n';
output += 'A = ' + numA + ', B = ' + numB + '\n';
output += 'A + B = ' + (numA + numB) + '\n';
output += 'A - B = ' + (numA - numB) + '\n';
output += 'A * B = ' + (numA * numB) + '\n';
output += 'A / B = ' + (numA / numB) + '\n';
output += 'A % B = ' + (numA % numB) + '（餘數，用於判斷整除或奇偶）\n';
output += 'A > B ? ' + (numA > numB) + '\n';
output += 'A == B ? ' + (numA == numB) + '\n';
output += 'A === B ? ' + (numA === numB) + '\n';

alert('計算完成，請看頁面結果與 Console');
console.log(output);
document.getElementById('result').textContent = output;
