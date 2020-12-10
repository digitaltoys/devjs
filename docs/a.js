var result = undefined;

Object.prototype.equals = function(x) {
	// 인자값의 Type이 object가 아닐경우 false를 리턴한다.
	if(typeof x !== "object") return false;
	// Type을 String으로 변환한다.
	var arr1 = JSON.stringify(this);
	var arr2 = JSON.stringify(x);

	return (arr1 === arr2);
}

function onRunClick() {
  result = undefined;
  let param = document.getElementById("param").value || '';
  eval('param = '+param);
  let func = eval('(param)=>{'+document.getElementById("func").value+'}');
  
  result = func(param);
  let target = eval(document.getElementById("require").innerText);
  
  if(typeof result == "object") {
    document.getElementById("resultmsg").innerHTML = result.equals(target)? 'Success':'Fail';
  } else {
    document.getElementById("resultmsg").innerHTML = result === target? 'Success':'Fail';
  }
  document.getElementById("result").innerHTML = ((typeof result == "object")?JSON.stringify(result):result.toString() || '');
}
