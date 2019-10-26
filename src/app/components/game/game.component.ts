import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Line } from '../../model/line.model';
import { Bar } from '../../model/bar.model';
import { MusicdataService } from 'src/app/services/musicdata.service';
import { MusicDataResponse } from 'src/app/models/musidata';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  musicData = new MusicDataResponse();
  audio = new Audio();
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.getMusicData();
  }

  drawBars(xCoord: number) {
    this.ctx.strokeStyle = 'blue';
    const bar = new Bar(this.ctx);
    bar.draw(xCoord, 200);
  }

  animate() {
    this.playAudio();
    // this.ctx.strokeStyle = 'red';
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

  drawBarsPerBeats(musicData: MusicDataResponse) {
    musicData.tracks.forEach(segment => {
      segment.forEach(item => {
        this.drawBars(item.time * 16.13);
      });
    });
  }

  getMusicData() {
    this.musicDataService.fetchMusicData()
      .subscribe(data => {
        this.musicData = data;
        this.drawBarsPerBeats(data);
      })
      ;
  }
}
