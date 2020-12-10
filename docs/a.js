var result = undefined;
window.onload = function() {
  document.getElementById("param").value = getCookie('param');
  document.getElementById("func").value = getCookie('func');
}

Object.prototype.equals = function(x) {
	// 인자값의 Type이 object가 아닐경우 false를 리턴한다.
	if(typeof x !== "object") return false;
	// Type을 String으로 변환한다.
	var arr1 = JSON.stringify(this);
	var arr2 = JSON.stringify(x);

	return (arr1 === arr2);
}
function setCookie(cookie_name, value, days) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + days);
  // 설정 일수만큼 현재시간에 만료값으로 지정

  var cookie_value = escape(value) + ((days == null) ? '' : '; expires=' + exdate.toUTCString());
  document.cookie = cookie_name + '=' + cookie_value;
}

function getCookie(cookie_name) {
  var x, y;
  var val = document.cookie.split(';');

  for (var i = 0; i < val.length; i++) {
    x = val[i].substr(0, val[i].indexOf('='));
    y = val[i].substr(val[i].indexOf('=') + 1);
    x = x.replace(/^\s+|\s+$/g, ''); // 앞과 뒤의 공백 제거하기
    if (x == cookie_name) {
      return unescape(y); // unescape로 디코딩 후 값 리턴
    }
  }
}

function onRunClick() {
  result = undefined;
  let param = document.getElementById("param").value || '';
  eval('param = '+param);
  let func = document.getElementById("func").value;
  setCookie('param', param, 9999999);
  setCookie('func', func, 9999999);
  func = eval('(param)=>{'+func+'}');
  
  result = func(param);
  let target = eval(document.getElementById("require").innerText);
  
  if(typeof result == "object") {
    document.getElementById("resultmsg").innerHTML = result.equals(target)? 'Success':'Fail';
  } else {
    document.getElementById("resultmsg").innerHTML = result === target? 'Success':'Fail';
  }
  document.getElementById("result").innerHTML = ((typeof result == "object")?JSON.stringify(result):result.toString() || '');
}
