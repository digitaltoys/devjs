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

정렬
sort, reverse - 오름차순, 내림차순으로 배열을 정렬합니다.
sort(function(a, b){return b - a}) - 함수를 사용하면 정렬방식을 정의할 수 있습니다.
```javascript
let famang = ["Facebook", "Apple", "Microsoft", "Amazone", "Netflix", "Google"];
famang.sort();      // ["Amazone", "Apple", "Facebook", "Google", "Microsoft", "Netflix"]
famang.reverse();   // ["Netflix", "Microsoft", "Google", "Facebook", "Apple", "Amazone"]
```

필터
filter - 배열에서 원하는 값만 추출 할 수 있습니다.
```javascript
let famang = ["Facebook", "Apple", "Microsoft", "Amazone", "Netflix", "Google"];
newFamang = famang.filter(myFunc);

function myFunc(item, index, arr) {
  return item.charAt(0) == "A"
}
// newFamang = ["Apple", "Amazone"]
```

반복
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

