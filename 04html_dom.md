## html DOM
![DOM](https://www.w3schools.com/js/pic_htmltree.gif)

### DOM의 계층구조
```
Document                 // html
  Element (attribute)    // tag
    Text                 // string
``` 
### 실제 html
```html
<html>
  <body>
    <div name='username' id='fname'>
      Gildong
    </div>
    <div name='username' id='lname'>
      Hong
    </div>
  </body>
</html>
```

### javascript에서의 접근
```javascript
let lname = document.getElementById("lname").innerText;
// 'Hong'

let usernames = document.getElementsByName("username");
// [<div name='username' id='fname'>Gildong</div>, <div name='username' id='lname'>Hong</div>]

var divs = document.getElementsByTagName("div")[0].innerText;
// 'Gildong'

var bodys = document.getElementsByTagName("body")[0].innerHTML   
//   '<div name="username" id="fname">
//      Gildong
//    </div>
//    <div name="username" id="lname">
//      Hong
//    </div>'
```
> 주의
> - getElementById는 1개를 리턴하지만, getElementsByName, getElementsByTagName은 배열을 리턴함
> - id는 html문서 내에서 **유일** 해야함.
(참고 : [getElementById](https://www.w3schools.com/jsref/met_document_getelementbyid.asp))

### 1. 다음 html에서 input의 값을 result에 출력하는 코드를 작성하세요
```javascript
<html>
  <body>
    <input id='in' value='ok'/>
    <button>get value</button>
    <div id='result'></div>
  </body>
</html>
```

### 2. 위 코드에 브라우저에서 input을 변경하고 버튼을 누르면 변경된 input 값이 출력 되도록 코드를 수정하세요

## [< index](index.md)
