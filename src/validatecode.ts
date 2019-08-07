// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

export default class ValidateCode {
  lineWidth?: number;
  lineCount?: number;
  dotNum?: number;
  dotR?: number;
  foregroundColor?: Array<number>;
  backgroundColor?: Array<number>;
  fontSize?: number;
  fontFamily?: string;
  fontStyle?: string;
  validateCode?: string;
  len?: number;
  canvas: any;
  paint: any;
  callback: any;

  constructor(dom: any, callback: Function) {
    this.lineWidth = 0.5;  // 线条宽度
    this.lineCount = 6;  // 线条数量
    this.dotNum = 10; // 点的数量
    this.dotR = 1.5; // 点的半径
    this.foregroundColor = [20, 50]; // 前景色区间
    this.backgroundColor = [150, 255]; // 背景色区间
    this.fontSize = 22; // 字体大小
    this.fontFamily = 'Georgia, serif'; // 字体类型
    this.fontStyle = 'fill'; // 字体绘制方法，fill/stroke
    this.validateCode = 'abcdefhijkmnpwxyABCDEFGHJKMNPQWXY123457890'; // 验证码因子
    this.len = 5; // 验证码长度
    this.callback = null
    this.canvas = dom; // canvas dom
    this.paint = null; // canvas 2d
    this.draw(callback)
  }

  draw(callback: Function) {
    if (!this.canvas) return;
    this.paint = this.canvas.getContext('2d');
    if (!this.paint) return;
    this.callback = callback; // 获取回调函数 拿到验证码
    this.canvas.onclick = () => { // 监听点击事件  点击刷新验证码
      this.refresh()
    };
    let colors = this.getColor(this.backgroundColor);
    console.log(colors);
    this.paint.fillStyle = `rgba(${colors[0]},${colors[1]},${colors[2]},.4)`;
    this.paint.fillRect(0, 0, this.canvas.width, this.canvas.height); // 绘制放验证码的矩形
    this.arc(); // 绘制干扰验证码的点点
    this.line(); // 绘制干扰验证码的线条
    this.font(); // 绘制验证码的文字
  }

  getColor(arr: any) {
    let colors = new Array(3).fill('');
    colors = colors.map(item => ValidateCode.getRand(...arr));
    return colors
  };

  static getRand(...arr: Array<number>) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return Math.floor(Math.random() * (max - min) + min);
  };

  line() {
    for (let i = 0; i < this.lineCount!; i++) {
      let x = ValidateCode.getRand(0, this.canvas.width);
      let y = ValidateCode.getRand(0, this.canvas.height);
      let endX = ValidateCode.getRand(0, this.canvas.width);
      let endY = ValidateCode.getRand(0, this.canvas.height);
      this.paint.beginPath();
      this.paint.lineWidth = this.lineWidth;
      let colors = this.getColor(this.foregroundColor);
      this.paint.strokeStyle = `rgba(${colors[0]},${colors[1]},${colors[2]},0.6)`;
      this.paint.moveTo(x, y);
      this.paint.lineTo(endX, endY);
      this.paint.closePath();
      this.paint.stroke()
    }
  };

  arc() {
    for (let i = 0; i < this.dotNum!; i++) {
      let x = ValidateCode.getRand(0, this.canvas.width);
      let y = ValidateCode.getRand(0, this.canvas.height);
      this.paint.beginPath();
      // 指定dot位置和半径
      this.paint.arc(x, y, this.dotR, 0, Math.PI * 2, false);
      this.paint.closePath();
      // 随机获取颜色
      let colors = this.getColor(this.foregroundColor);
      this.paint.fillStyle = `rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, 0.5)`;
      // 绘制
      this.paint.fill()
    }
  };

  getValidateCode() {
    let str = '';
    let codeLength = this.validateCode!.length;
    for (let i = 0; i < this.len!; i++) {
      str += this.validateCode![ValidateCode.getRand(0, codeLength)] // 随机组成验证码
    }
    return str;
  }

  font() {
    let str = this.getValidateCode(); // 获取验证码
    this.callback(str); // 把验证码传出去 与用户输入的进行对比
    // 指定文字风格
    this.paint.font = `${this.fontSize}px ${this.fontFamily}`;
    this.paint.textBaseline = 'middle'; // 设置占位为框的中间
    // 绘制文字风格
    let fontStyle = `${this.fontStyle}Text`;
    let colorStyle = `${this.fontStyle}Style`;
    for (let i = 0; i < this.len!; i++) { // 循环绘制每一个字
      let fontWidth = this.paint.measureText(str[i]).width; // 绘制文字的宽度
      // 绘制文字的X坐标
      let x = ValidateCode.getRand(this.canvas.width / this.len! * i, (this.canvas.width / this.len!) * i + fontWidth / 2);
      // 字体随机旋转角度
      let deg = ValidateCode.getRand(-5, 5);
      // 随机获取文字颜色
      let colors = this.getColor(this.foregroundColor);
      this.paint[colorStyle] = `rgba(${colors[0]},${colors[1]},${colors[2]},.6)`;
      // 开始绘制
      this.paint.save();
      this.paint.rotate(deg * Math.PI / 180);
      this.paint[fontStyle](str[i], x, this.canvas.height / 2);
      this.paint.restore();
    }
  }

  clear() {
    this.paint.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  refresh() {
    this.clear();
    this.draw(this.callback)
  }
}

const code = new ValidateCode(document.getElementById('canvas'), (code: string) => {
  console.log(code);
});





