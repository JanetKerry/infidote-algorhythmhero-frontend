export class Bar {
  length = Math.floor(Math.random() * 199) + 50;
  constructor(private ctx: CanvasRenderingContext2D) { }
  draw(x: number, y: number) {
    this.ctx.moveTo(x, y - (this.length / 2));
    this.ctx.lineTo(x, y + this.length / 2);
    this.ctx.stroke();
  }
}
