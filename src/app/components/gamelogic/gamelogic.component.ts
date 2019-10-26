import { Component, OnInit, HostListener } from '@angular/core';

import { TrackModel } from '../../models/trackModel';
import { MusicdataService } from '../../services/musicdata.service'
import { MusicDataResponse } from 'src/app/models/musidata';

@Component({
  selector: 'app-gamelogic',
  templateUrl: './gamelogic.component.html',
  styleUrls: ['./gamelogic.component.scss']
})
export class GamelogicComponent implements OnInit {

  @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent){
      event.preventDefault();
      if (event.keyCode === 83) {
        this.clickAction();
      }
      }

  playable: boolean = false;
  timeCounter: number;
  running: boolean = false;
  counter: number = 0;
  timerRef;
  timeArr: TrackModel;
  timesArr;
  trackCount: number = 0;
  score: number = 0;
  constructor(private musicService: MusicdataService) { }

  ngOnInit() {
    this.musicService.fetchMusicData().subscribe(data =>{ this.moderateResponse(data)});
  }

  stopwatch(): void {
    this.playable = true; // playable is going to used to enable to click functinality(not implemented yet) only if the stopwatch started
      const startTime = Date.now()/1000 - (this.counter || 0);
      this.timerRef = setInterval(() => {
        this.counter = Date.now()/1000 - startTime;
        if (this.counter > this.timesArr[this.trackCount]*1.2) {
          // in this case, click didn't happened within the 20% of the current track's range therefor trackCount increased
          this.trackCount++;
        }
        if (this.counter >= this.timesArr[this.timesArr.length-1]) { 
        //this if~else statement is inside of the interval to be able to stop itself automatically.
        // it is checking the last time of the beat/bar so game can be still playable
        this.playable = false;
        clearInterval(this.timerRef);
      }else{
        // time passed the last beat's time there for game stopped
      }
      });
  }
  moderateResponse(data:MusicDataResponse): void{ 
    // this function is taking all "time"s and puts them in an array. Therefor we don't need to worry about how many elements in each section
    // since just need the time. At the end, we are treating the JSON file as a 1D array, this function will make our work easier
    let singleArr = [];
    for (let i = 0; i < data.tracks.length; i++) {
      for (let j = 0; j < data.tracks[i].length; j++) {
        singleArr.push(data.tracks[i][j].time);
      }
    }
    this.timesArr = singleArr;
  }
  clickAction() {
    if (this.playable) {
      if (this.counter > this.timesArr[this.trackCount]*0.3 && this.counter < this.timesArr[this.trackCount]*1.7) {
        // console.log(this.timesArr[this.trackCount]*0.8, this.timesArr[this.trackCount]*1.2)
        console.log(this.counter, ' => ', this.timesArr[this.trackCount])
        if (this.counter > this.timesArr[this.trackCount]*0.9 && this.counter < this.timesArr[this.trackCount]*1.1) {
          console.log(`score: ${this.score} +100`)
          this.score += 100;
          this.trackCount++;
          return;
        }
        console.log(`score: ${this.score} -50`)
        this.score -= 50;
        this.trackCount++;
      }
    }
  }
}
