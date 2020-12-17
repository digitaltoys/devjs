---
layout: default
title: 7. Flash card app
nav_order: 8
nav_exclude: true
---

# Array
배열 객체를 알아봅시다

배열의 끝에 추가 제거는 push, pop을 사용합니다.
배열의 앞에 추가 제거는 unshift, shift를 사용합니다.
```javascript
let famang = ['Facebook', 'Apple', 'Microsoft', 'Amazone', 'Netflix, 'Google'];
famang.push('AMD');       // ['Facebook', 'Apple', 'Microsoft', 'Amazone', 'Netflix, 'Google', 'AMD']
let amd = famang.pop();   // ['Facebook', 'Apple', 'Microsoft', 'Amazone', 'Netflix, 'Google']

famang.unshift('AMD');    // ['AMD', 'Facebook', 'Apple', 'Microsoft', 'Amazone', 'Netflix, 'Google']
amd = famang.shift();     // ['Facebook', 'Apple', 'Microsoft', 'Amazone', 'Netflix, 'Google']
```

배열 합치기는 concat을 사용합니다.
```javascript
let famang1 = ['Facebook', 'Apple', 'Microsoft'];
let famang2 = ['Amazone', 'Netflix, 'Google'];
let famang = famang1.concat(famang2);               // ['Facebook', 'Apple', 'Microsoft', 'Amazone', 'Netflix, 'Google']

```


<div class="code-example" markdown="1">
# Apple
</div>
