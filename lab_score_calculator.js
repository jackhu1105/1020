// lab_score_calculator.js
// 延伸版：以 prompt 取得 5 科成績，計算平均與等第，檢查不及格

// 小工具：轉為數字（若輸入錯誤回傳 null）
function toNumber(str) {
  var n = parseFloat(str);
  return isNaN(n) ? null : n;
}

// 小工具：根據平均分數回傳等第
function gradeFrom(avg) {
  if (avg >= 90) return 'A';
  else if (avg >= 80) return 'B';
  else if (avg >= 70) return 'C';
  else if (avg >= 60) return 'D';
  else return 'F';
}

// === 主程式區 ===
var name = prompt('請輸入姓名：');
if (!name) {
  name = '同學';
}

// 讀入五科成績
var subjects = ['國文', '英文', '數學', '自然', '社會'];
var scores = [];
for (var i = 0; i < subjects.length; i++) {
  var s = toNumber(prompt('請輸入 ' + subjects[i] + ' 成績：'));
  if (s === null) {
    scores = null; // 若有任一科錯誤，中止
    break;
  }
  scores.push(s);
}

var text = '';

if (scores === null) {
  text = '輸入有誤，請重新整理後再試。';
} else {
  // 計算總分與平均
  var sum = 0;
  var hasFail = false;
  for (var j = 0; j < scores.length; j++) {
    sum += scores[j];
    if (scores[j] < 60) {
      hasFail = true;
    }
  }
  var avg = sum / scores.length;

  // 組合輸出內容
  text += '姓名：' + name + '\n';
  for (var k = 0; k < subjects.length; k++) {
    text += subjects[k] + '：' + scores[k] + '\n';
  }
  text += '平均：' + avg.toFixed(2) + '\n';
  text += '等第：' + gradeFrom(avg) + '\n';

  if (hasFail) {
    text += '⚠️ 有不及格科目';
  } else {
    text += '✅ 全部及格';
  }
}

// 輸出至 Console 與頁面
console.log(text);
document.getElementById('result').textContent = text;
