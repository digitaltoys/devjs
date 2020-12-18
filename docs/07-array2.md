---
layout: default
title: 7. Array 2
nav_order: 8
nav_exclude: true
---
<script src="./util.js"></script>

# Array 2
배열에 자주 사용되는 함수를 알아봅시다  
<br> 

### 정렬  
sort, reverse - 오름차순, 내림차순으로 배열을 정렬합니다.
sort(function(a, b){return b - a}) - 함수를 사용하면 정렬방식을 정의할 수 있습니다.
```javascript
let famang = ["Facebook", "Apple", "Microsoft", "Amazone", "Netflix", "Google"];
famang.sort();      // ["Amazone", "Apple", "Facebook", "Google", "Microsoft", "Netflix"]
famang.reverse();   // ["Netflix", "Microsoft", "Google", "Facebook", "Apple", "Amazone"]
```

### 필터
filter - 배열에서 원하는 값만 추출 할 수 있습니다.
```javascript
let famang = ["Facebook", "Apple", "Microsoft", "Amazone", "Netflix", "Google"];
newFamang = famang.filter(myFunc);

function myFunc(item, index, arr) {
  return item.charAt(0) == "A"
}
// newFamang = ["Apple", "Amazone"]
```

### 반복
forEach - 각 요소에 대하여 연산을 수행할 수 있습니다.
```javascript
let famang = ["Facebook", "Apple", "Microsoft", "Amazone", "Netflix", "Google"];
famang.forEach(myFunc);
let html="";

function myFunc(item, index, arr) {
  html = html + item + "<br>";
}
// html = Facebook<br>Apple<br>Microsoft<br>Amazone<br>Netflix<br>Google<br>
```

map - 각 요소에 연산을 수행후 새로운 배열을 리턴합니다.  
```javascript
let famang = ["Facebook", "Apple", "Microsoft", "Amazone", "Netflix", "Google"];
let newFamang = famang.map(myFunc);

function myFunc(item, index, arr) {
  return item + "<br>";
}
// newFamang = ["Facebook<br>", "Apple<br>", "Microsoft<br>", "Amazone<br>", "Netflix<br>", "Google<br>"]

```
위 map 함수는 => 함수를 사용하면 한줄로 간단하게 표현할 수 있습니다.  
```javascript
let famang = ["Facebook", "Apple", "Microsoft", "Amazone", "Netflix", "Google"];
let newFamang = famang.map((item) => item + "<br>");
// newFamang = ["Facebook<br>", "Apple<br>", "Microsoft<br>", "Amazone<br>", "Netflix<br>", "Google<br>"]
```

reduce(func, 초기값) - 각 요소의 연산 결과를 누적할 수 있습니다.  
forEach 예문을 reduce를 사용해서 바꿔보면 다음과 같습니다.  
**주의 - 초기값을 넣지 않으면 배열의 첫번째 요소가 초기값으로 사용되고 초기값은 함수가 적용되지 않습니다**
```javascript
let famang = ["Facebook", "Apple", "Microsoft", "Amazone", "Netflix", "Google"];
let html = famang.reduce((ret, item) => ret + item + "<br>", "");
// html = Facebook<br>Apple<br>Microsoft<br>Amazone<br>Netflix<br>Google<br>
```

### 요소 찾기
indexOf, lastIndexOf - 값을 요소에서 찾고 일치하면 인덱스를 리턴합니다.
```javascript
let famang = ["Facebook", "Apple", "Microsoft", "Amazone", "Netflix", "Google"];
famang.indexOf("Netflix");      // 4
```
find - 조건에 만족하는 첫번째 요소를 리턴합니다  
```javascript
let famang = ["Facebook", "Apple", "Microsoft", "Amazone", "Netflix", "Google"];
famang.find((item) => item > "H");      // "Microsoft"
```

### 퀴즈
배열 ["Facebook", "Apple", "Microsoft", "Amazone", "Netflix", "Google"]을   
output 
```html
<div>Facebook</div><div>Apple</div><div>Microsoft</div><div>Amazone</div><div>Netflix</div><div>Google</div>
```
이 되도록 코드를 작성하세요  

<div>let param = <b id="param">["Facebook", "Apple", "Microsoft", "Amazone", "Netflix", "Google"]</b></div>
<textarea id='func' rows="10" cols="100">
</textarea>
<div>console.log(param);</div>  

```html
<div>Facebook</div><div>Apple</div><div>Microsoft</div><div>Amazone</div><div>Netflix</div><div>Google</div>
```
<pre id='requirehtml' style="display:none"><div>Facebook</div><div>Apple</div><div>Microsoft</div><div>Amazone</div><div>Netflix</div><div>Google</div></pre>  
<button id='run' onclick='onRunClick()'>run</button>  
<div>result:  <b id='result' style='color:green'></b></div>
<div id='resultmsg' style='font-weight:bold'></div>
<br><br>
