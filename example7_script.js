// example7_script.js
function calcBMI(heightCm, weightKg) {
    var h = heightCm / 100;
    return weightKg / (h * h);
  }
  
  function bmiLevel(bmi) {
    if (bmi < 18.5) return '過輕';
    else if (bmi < 24) return '正常';
    else if (bmi < 27) return '過重';
    else if (bmi < 30) return '輕度肥胖';
    else if (bmi < 35) return '中度肥胖';
    else return '重度肥胖';
  }
  
  // 延伸練習：是否為理想範圍
  function isIdeal(bmi) {
    return bmi >= 18.5 && bmi < 24;
  }
  
  var h = parseFloat(prompt('請輸入身高（公分）：'));
  var w = parseFloat(prompt('請輸入體重（公斤）：'));
  var text = '';
  
  if (isNaN(h) || isNaN(w) || h <= 0) {
    text = '輸入不正確';
  } else {
    var bmi = calcBMI(h, w);
    text = '身高：' + h + ' cm\n'
         + '體重：' + w + ' kg\n'
         + 'BMI：' + bmi.toFixed(2) + '\n'
         + '等級：' + bmiLevel(bmi) + '\n'
         + '是否理想體重：' + (isIdeal(bmi) ? '✅ 是' : '❌ 否');
  }
  
  document.getElementById('result').textContent = text;
  