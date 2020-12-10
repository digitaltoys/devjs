input

let param =  
<input type="text" id="param"/>  
function myFunc(param) =   
<textarea id='func' rows="10" cols="150"'>{}</textarea>  
}  
<button id='run' onclick='onRunClick()'>run</button>
<script>
let param = document.getElementById("param").value;
let func;
function onRunClick() = {
  func = eval('(param)=>{'+document.getElementById("func").value+'}');
  document.getElementById("result").innerHTML = func(param);
}
  
</script>
---
result:  
<div id='result' width='400' height='100'></div>
