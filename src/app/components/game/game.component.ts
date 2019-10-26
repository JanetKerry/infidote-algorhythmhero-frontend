import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Line } from '../../model/line.model';
import { Bar } from '../../model/bar.model';
import { TrackService } from 'src/app/services/track/track.service';
import { Track } from 'src/app/model/track.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;

  constructor (private trackService: TrackService) {

  }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.drawBars();
  }

  getTrack() {
    const trackRequest = this.trackService.getTrack()
    trackRequest.subscribe(track => {
      console.log(track)
      const ratio = 600 / track.tracks[track.tracks.length - 1].time

    })
  }

  drawBars() {
    this.ctx.strokeStyle = 'blue';
    const bar = new Bar(this.ctx);
    bar.draw(40, 10);
  }

  animate() {
    this.ctx.strokeStyle = 'red';
    const line = new Line(this.ctx);
    line.move(200, 1);
  }
}
