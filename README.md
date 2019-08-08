# canvas-validate-code


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

### validateCode
![布局](https://my-images-api.oss-cn-beijing.aliyuncs.com/images/code.png?Expires=1565240529&OSSAccessKeyId=TMP.hWYaY9mCLkRr7LvUpdssvSB4MM59TP1hHfkmDspzyhZLeBhXHyKyCwbESueAG9mu3njPcCQswjLAdwtszh4rvABiN5LvR2K7V4w9yt8EHpoS1tVHZXWaA4FurKE5AL.tmp&Signature=zf%2FJV5E5aDlOuqMI%2FKVfC3utcZs%3D)
### Click on the switch
![布局](https://my-images-api.oss-cn-beijing.aliyuncs.com/images/Honeycam%202019-08-07%2019-08-01.gif?Expires=1565240924&OSSAccessKeyId=TMP.hWYaY9mCLkRr7LvUpdssvSB4MM59TP1hHfkmDspzyhZLeBhXHyKyCwbESueAG9mu3njPcCQswjLAdwtszh4rvABiN5LvR2K7V4w9yt8EHpoS1tVHZXWaA4FurKE5AL.tmp&Signature=vqEsLQ4v4BdHD1UyPaMc5zhnoYc%3D)
