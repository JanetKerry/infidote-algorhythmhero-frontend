export class Line {
  pixelsPerMSeconds = 0.1613;
  constructor(private ctx: CanvasRenderingContext2D) { }
  draw(x: number, y: number) {
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(x + this.pixelsPerMSeconds, y);
    this.ctx.stroke();
  }

  move(y: number, z: number) {
    const max = this.ctx.canvas.width * 100;
    const canvas = this.ctx.canvas;
    let x = 0;
    const i = setInterval(() => {
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.draw(x * this.pixelsPerMSeconds, y);
      x ++;
      if (x >= max) {
        clearInterval(i);
      }
    }, 10);
  }
}


