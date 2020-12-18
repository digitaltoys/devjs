var result = undefined;

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


window.onload = function() {
  document.getElementById("param").value = getCookie('param') || document.getElementById("param").value || '';
  document.getElementById("func").value = getCookie('func') || document.getElementById("func").value || '';
}

function onRunClick() {
  result = undefined;
  let idParam = document.getElementById("param");
  let param = (idParam.value != '')? idParam.value : (idParam.innerText || '');
  let func = document.getElementById("func").value || '';
//   setCookie('param', param, 9999999);
  setCookie('func', func, 9999999);

  try {
    eval('param = '+param);
    func = eval('(param)=>{'+func+'return param;}');
    console.log('func = ',func);
    result = func(param);
  } catch (e) {
    console.log('error -----', '(param)=>{'+func+'}');
    result = undefined;
  }
	
  let require = document.getElementById("require") && document.getElementById("require").innerText;
  let requireHtml = document.getElementById("requireHtml") && document.getElementById("requireHtml").innerHTML;
  let target = eval(require) || requireHtml;
  console.log(target);
  
  if(typeof result == "object") {
    document.getElementById("resultmsg").innerHTML = result.equals(target)? '<div style="color:blue">Success</div>':'<div style="color:red">Fail</div>';
  } else {
    document.getElementById("resultmsg").innerHTML = result === target? '<div style="color:blue">Success</div>':'<div style="color:red">Fail</div>';
  }
  console.log(result);
  document.getElementById("result").innerHTML = ((typeof result == "object")?JSON.stringify(result):result.toString()) || '';
}
