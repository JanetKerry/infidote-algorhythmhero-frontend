import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Line } from '../../model/line.model';
import { Bar } from '../../model/bar.model';
import { MusicdataService } from 'src/app/services/musicdata.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  audio = new Audio();
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.getMusicData();
    this.drawBars();
  }

  drawBars() {
    this.ctx.strokeStyle = 'blue';
    const bar = new Bar(this.ctx);
    bar.draw(40, 10);
  }

  animate() {
    this.playAudio();
    this.ctx.strokeStyle = 'red';
    const line = new Line(this.ctx);
    line.move(200, 1);
  }
  constructor(private musicDataService: MusicdataService) { }

  playAudio() {
    this.audio.src = '../../assets/music/chopsuey.mp3';
    this.audio.load();
    this.audio.play();
  }
  stopAudio() {
    this.audio.pause();
  }

  getMusicData() {
    this.musicDataService.fetchMusicData()
      .subscribe(data => console.log(data));
  }
}
