---
layout: default
title: 6. Array 1
nav_order: 7
nav_exclude: false
---
<script src="./util.js"></script>

# Array
배열 객체를 알아봅시다  
<br> 

### 추가제거  
배열의 끝에 추가 제거는 push, pop을 사용합니다.
배열의 앞에 추가 제거는 unshift, shift를 사용합니다.
```javascript
let famang = ['Facebook', 'Apple', 'Microsoft', 'Amazone', 'Netflix, 'Google'];
famang.push('AMD');       // ['Facebook', 'Apple', 'Microsoft', 'Amazone', 'Netflix, 'Google', 'AMD']
let amd = famang.pop();   // ['Facebook', 'Apple', 'Microsoft', 'Amazone', 'Netflix, 'Google']

famang.unshift('AMD');    // ['AMD', 'Facebook', 'Apple', 'Microsoft', 'Amazone', 'Netflix, 'Google']
amd = famang.shift();     // ['Facebook', 'Apple', 'Microsoft', 'Amazone', 'Netflix, 'Google']
```
<br>  

### 배열 합치기  
concat(배열2) - 배열2를 배열에 합쳐집니다
```javascript
let famang1 = ['Facebook', 'Apple', 'Microsoft'];
let famang2 = ['Amazone', 'Netflix', 'Google'];
let famang = famang1.concat(famang2);               // ['Facebook', 'Apple', 'Microsoft', 'Amazone', 'Netflix, 'Google']

```
<br> 

### 일부 추출, 삭제, 변경, 추가  
splice(인덱스[, 길이[, 바꿀값]]) - 0 베이스 인데스 값부터 길이만큼 삭제하고 삭제한 값을 리턴합니다, 길이 생략시 끝까지
```javascript
arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

arr2 = arr1.splice(3,2);           // arr1 = [0, 1, 2, 5, 6, 7, 8, 9]       arr2 = [3, 4]   // 추출,삭제
arr3 = arr1.splice(7,0, 8.5);      // arr1 = [0, 1, 2, 5, 6, 7, 8, 8.5, 9]  arr3 = []       // 추가
arr4 = arr1.splice(4,1, '변경');   // arr1 = [0, 1, 2, 5, "변경", 7, 8, 9]  arr4 = [6]      // 변경
arr5 = arr1.splice(0);             // arr1 = []                             arr4 = [0, 1, 2, 5, "추가", 7, 8, 9]
```
<br>  

slice(첫인덱스[, 끝인덱스]) - 첫인덱스부터 끝인덱스 까지 추출, **원본 변경안됨**
```javascript
arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

arr2 = arr1.slice(3,2); // arr1 = [0, 1, 2, 3, 4 , 5, 6, 7, 8, 9] arr2 = [3, 4] // 추출, 원본 변경안됨
```

### 퀴즈
배열 ["A","B",3,4,"D","F",6,"G"]을 output ["A","B","C","D","E","F","G"]이 되도록 코드를 작성하세요  

<div>let param = <b id="param">["A","B",3,4,"D","F",6,"G"]</b></div>
<textarea id='func' rows="10" cols="100">
</textarea>
<div>console.log(param);</div>
<div id='require'>["A","B","C","D","E","F","G"]</div>  
<button id='run' onclick='onRunClick()'>run</button>  
<div>result:  <b id='result' style='color:green'></b></div>
<div id='resultmsg' style='font-weight:bold'></div>
<br><br>
