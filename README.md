# canvas verification code


## Installation

Install for node.js or browserify using `npm`:

``` bash
$ npm install validatecode
```
## Getting started
Let's see its HTML:
```html
<canvas id="canvas" ></canvas>
```
```javascript
import ValidateCode from 'validatecode'
let canvas = document.querySelector('#canvas')
let validateCode = new ValidateCode(canvas, (code) => {
  console.log(code) // this validateCode
})
```

## API

### validateCode(dom, callback, fontSize, len)

- `dom` (`dom`) 
- `callback` (`Function`)
  - `str` (`String`) validateCode string
- `fontSize` validateCode fontSize
- `len` validateCode length

### verification code
![布局](https://my-data-api.oss-cn-hongkong.aliyuncs.com/code.png?Expires=1567831706&OSSAccessKeyId=TMP.hVZhSKirDvXhvo3ym1ChnCHxx9BVKAT9KvtUM9VnZiNutvYNZDwbhT5qu5aBkMwM6C2vK1s9nqU2MZGABDTDW2um3Mi1mssrc91TU96Yh63nUHyWeenUK76wwdD53E.tmp&Signature=vO8iW355TAQ8rhdeDuIkLjEzP%2Bg%3D)
### Click on the switch
![布局](https://my-images-api.oss-cn-beijing.aliyuncs.com/images/Click%20on%20the%20switch.gif?Expires=1567831688&OSSAccessKeyId=TMP.hVZhSKirDvXhvo3ym1ChnCHxx9BVKAT9KvtUM9VnZiNutvYNZDwbhT5qu5aBkMwM6C2vK1s9nqU2MZGABDTDW2um3Mi1mssrc91TU96Yh63nUHyWeenUK76wwdD53E.tmp&Signature=RwWUuPi9Dy0cXUQVHCDKn8Z9bC4%3D)
