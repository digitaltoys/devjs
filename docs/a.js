let param = document.getElementById("param").value;
let func;
function onRunClick() {
  func = eval('(param)=>{'+document.getElementById("func").value+'}');
  console.log(param,func);
  console.log(document.getElementById("func").value);
  document.getElementById("result").innerHTML = func(param);
}
