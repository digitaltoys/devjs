function onRunClick() {
  let param = document.getElementById("param").value || '';
  let func = eval('(param)=>{let result = param; '+document.getElementById("func").value+' return result;}');
  console.log(param,func);
  console.log(document.getElementById("func").value);
  document.getElementById("result").innerHTML = func(param);
}
