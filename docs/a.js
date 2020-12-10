function onRunClick() {
  let param = eval(document.getElementById("param").value) || '';
  let func = eval('(param)=>{'+document.getElementById("func").value+'}');
  document.getElementById("result").innerHTML = func(param) || '';
}
