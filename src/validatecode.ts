// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

export default class ValidateCode {
  lineWidth: number;
  lineCount: number;
  dotNum: number;
  dotR: number;
  foregroundColor: Array<number>;
  backgroundColor: Array<number>;
  fontSize: number;
  fontFamily: string;
  fontStyle: string;
  validateCode: string;
  len: number;
  canvas: any;
  paint: any;
  callback: any;

  constructor(dom: any, callback: Function, fonsSize?: number,len?: number) {
    this.lineWidth = 0.5;
    this.lineCount = 6;
    this.dotNum = 10;
    this.dotR = 1.5;
    this.foregroundColor = [20, 50];
    this.backgroundColor = [150, 255];
    this.fontSize = fonsSize || 22;
    this.fontFamily = 'Georgia, serif';
    this.fontStyle = 'fill';
    this.validateCode = 'abcdefhijkmnpwxyzABCDEFGHJKMNPQWXYZ123457890';
    this.len = len ||　5;
    this.callback = null;
    this.canvas = dom;
    this.paint = null;
    this.draw(callback)
  }

  draw(callback: Function) {
    if (!this.canvas) return;
    this.paint = this.canvas.getContext('2d');
    if (!this.paint) return;
    this.callback = callback;
    this.canvas.onclick = () => {
      this.refresh()
    };
    let colors = this.getColor(this.backgroundColor);
    this.paint.fillStyle = `rgb(255,${colors[1]},${colors[2]})`;
    this.paint.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.arc();
    this.line();
    this.font();
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
    for (let i = 0; i < this.lineCount; i++) {
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
    for (let i = 0; i < this.dotNum; i++) {
      let x = ValidateCode.getRand(0, this.canvas.width);
      let y = ValidateCode.getRand(0, this.canvas.height);
      this.paint.beginPath();
      this.paint.arc(x, y, this.dotR, 0, Math.PI * 2, false);
      this.paint.closePath();
      let colors = this.getColor(this.foregroundColor);
      this.paint.fillStyle = `rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, 0.5)`;
      this.paint.fill()
    }
  };

  getValidateCode() {
    let str = '';
    let codeLength = this.validateCode.length;
    for (let i = 0; i < this.len; i++) {
      str += this.validateCode[ValidateCode.getRand(0, codeLength)]
    }
    return str;
  }

  font() {
    let str = this.getValidateCode();
    this.callback(str);
    this.paint.font = `${this.fontSize}px ${this.fontFamily}`;
    this.paint.textBaseline = 'middle';
    let fontStyle = `${this.fontStyle}Text`;
    let colorStyle = `${this.fontStyle}Style`;
    for (let i = 0; i < this.len; i++) {
      let fontWidth = this.paint.measureText(str[i]).width;
      let x = ValidateCode.getRand(this.canvas.width / this.len * i, (this.canvas.width / this.len) * i + fontWidth / 2);
      let deg = ValidateCode.getRand(-5, 5);
      let colors = this.getColor(this.foregroundColor);
      this.paint[colorStyle] = `rgb(${colors[0]},${colors[1]},${colors[2]})`;
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





