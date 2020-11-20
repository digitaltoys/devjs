---
layout: default
title : 5. json 구조
nav_order: 6
---

## json
### json 구조
![](img/img_json_object.png)
- json은 object이고 {로 시작해서 }로 끝난다
- key와 value의 쌍으로 이루어진다
- key는 string이고 value는 object(string, number, boolen, array, null, object...)이다
- key는 중복될수 없다
- 배열은 []로 표현한다.
- value의 접근은 .연산자를 사용한다
```javascript
let user = {name:'Hong Gildong', tel:'010-2222-3333'}
user.name      // 'Hong Gildong'
```

### 1. 다음 data를 json으로 표현하세요
|번호 |아이디 | 암호   | 전화번호       | 주소|
|-----|-------|--------|---------------|-----|
|1    | hong  | hgd123 | 010-2222-3333 |     |
|2    | kim   | devjs |                |     |
|3    | lee   | 1234  |                | 서울|

### 2. 다음 data를 json으로 표현하세요
```
아이디 : hong
전화번호 : 국번 : 010
           중간번호: 2222
           끝번호: 3333
```

### 3. 다음 data를 json으로 표현하세요
```
제목: 글1
내용: 내용1
아이디: 유저1
댓글: 아이디: 유저2
      내용: 나는 유저2다
      아이디: 유저3
      내용: 나는 유저3이다
제목: 글2
내용: 내용2
아이디: 유저2
```

## [< index](index.md)
