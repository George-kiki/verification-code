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
![布局](https://my-images-api.oss-cn-beijing.aliyuncs.com/images/code.png?Expires=1566013269&OSSAccessKeyId=TMP.hVH41jqfD6VQLessX3C7vgx5vjECfXiAPgW2f1WAeAW7kR1vKBzxZTgfqZAjZmqHRjQskrnNAxVM5ccQH2RVaToy8YkDCpUDyWwAWXTxJBRKJHXGeVLMVQka9XE9E9.tmp&Signature=XMCZEHkfeUqqF12IQzIKuCNvD1o%3D)
### Click on the switch
![布局](https://my-images-api.oss-cn-beijing.aliyuncs.com/images/Click%20on%20the%20switch.gif?Expires=1565305895&OSSAccessKeyId=TMP.hVEAH7tpUBzs7y2DNbhFBFQsTCjjbsj7us2uibZK3GW2EQZS76kRzVMLVk35i5t6BJ3ti9qEgM5HU5SMbBSnqtcGABFXxHwMUUFsp1bSjE7e41uvLsjJo5eM6Be6vY.tmp&Signature=EPEaRvMHWMdKwBZ%2BWYSStm%2FaUmk%3D)
