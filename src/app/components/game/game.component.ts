import { Component, OnInit, ViewChild, ElementRef,HostListener } from '@angular/core';
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

  @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent){
      event.preventDefault();
      if (event.keyCode === 83) {
        this.clickAction();
      }
      }

  musicData = new MusicDataResponse();
  audio = new Audio();
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  playable: boolean = false;
  timeCounter: number;
  running: boolean = false;
  counter: number = 0;
  timerRef;
  timeArr: MusicDataResponse;
  timesArr;
  trackCount: number = 0;
  score: number = 0;
  
  private ctx: CanvasRenderingContext2D;

  constructor(private musicDataService: MusicdataService) { }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.getMusicData();
    this.musicDataService.fetchMusicData().subscribe(data =>{ this.moderateResponse(data) });
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
  stopwatch(): void {
    this.playable = true; // playable is going to used to enable to click functinality(not implemented yet) only if the stopwatch started
      const startTime = Date.now() - (this.counter || 0);
      this.timerRef = setInterval(() => {
        this.counter = Date.now() - startTime;
        if (this.counter > this.timesArr[this.trackCount]*1.2) {
          console.log(this.timesArr[this.trackCount]*1.2, this.counter);
          // in this case, click didn't happened within the 20% of the current track's range therefore trackCount increased
          this.trackCount++;
        }
        if (this.counter >= this.timesArr[this.timesArr.length-1]) { 
        //this if~else statement is inside of the interval to be able to stop itself automatically.
        // it is checking the last time of the beat/bar so game can be still playable
        this.playable = false;
        clearInterval(this.timerRef);
        }
      });
  }
  moderateResponse(data:MusicDataResponse): void{ 
    // this function is taking all "time"s and puts them in an array. Therefore we don't need to worry about how many elements in each section
    // since just need the time. At the end, we are treating the JSON file as a 1D array, this function will make our work easier
    let singleArr = [];
    for (let i = 0; i < data.tracks.length; i++) {
      for (let j = 0; j < data.tracks[i].length; j++) {
        singleArr.push(data.tracks[i][j].time*1000);
      }
    }
    this.timesArr = singleArr;
  }
  clickAction() {
    if (this.playable) {
      if (this.counter > this.timesArr[this.trackCount]*0.3 && this.counter < this.timesArr[this.trackCount]*1.7) {
        console.log(this.counter, ' => ', this.timesArr[this.trackCount])
        if (this.counter > this.timesArr[this.trackCount]*0.9 && this.counter < this.timesArr[this.trackCount]*1.1) {
          console.log(`score: ${this.score} +100`)
          this.score += 100;
          return;
        }
        console.log(`score: ${this.score} -50`)
        this.score -= 50;
      }
    }
  }
}
