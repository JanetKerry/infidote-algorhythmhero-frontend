import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Line } from '../../model/line.model';
import { Bar } from '../../model/bar.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.drawBars();
  }

  drawBars() {
    this.ctx.strokeStyle = 'blue';
    const bar = new Bar(this.ctx);
    bar.draw(40, 10);
  }

  animate() {
    this.ctx.strokeStyle = 'red';
    const line = new Line(this.ctx);
    const growth = 10;
    line.draw(0, 200);
    line.move(200, 10);
  }
}
