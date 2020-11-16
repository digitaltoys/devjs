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
let lname = document.getElementById("lname");             // 'Hong'
let usernames = document.getElementsByName("username");   // ['Gildong','Hong']
var divs = document.getElementsByTagName("div");          // [<div name='username' id='fname'>Gildong</div>, <div name='username' id='lname'>Hong</div>]
```
