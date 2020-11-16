## html DOM
![DOM](https://www.w3schools.com/js/pic_htmltree.gif)

### DOM의 계층구조
Document
  Element (attribute)
    Text
    
### 실제 html
```html
<html>
  <body>
    <div id='name'>
      Hong
    </div>
  </body>
</html>
```

### javascript에서의 접근
```javascript
let name = document.getElementById("name");   // 'Hong'
```
