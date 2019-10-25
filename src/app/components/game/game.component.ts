import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Line } from '../../model/line.model';

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
  }

  animate() {
    this.ctx.strokeStyle = 'red';
    const line = new Line(this.ctx);
    line.draw(40, 10);
  }

}

