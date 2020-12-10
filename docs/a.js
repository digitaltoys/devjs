function onRunClick() {
  let param = document.getElementById("param").value || '';
  eval('param = '+param);
  let func = eval('(param)=>{'+document.getElementById("func").value+'}');
  document.getElementById("result").innerHTML = func(param) || '';
}
