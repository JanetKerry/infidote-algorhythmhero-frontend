import { Component, OnInit } from '@angular/core';

import { TrackModel } from '../../models/trackModel'

@Component({
  selector: 'app-gamelogic',
  templateUrl: './gamelogic.component.html',
  styleUrls: ['./gamelogic.component.scss']
})
export class GamelogicComponent implements OnInit {

  timeCounter: number;
  running: boolean = false;
  counter: number;
  timerRef;
  timeArr: TrackModel;
  timesArr;
  trackCount: number = 0;
  constructor() { }

  ngOnInit() {
  }

  stopwatch(): void {
      const startTime = Date.now() - (this.counter || 0);
      this.timerRef = setInterval(() => {
        this.counter = Date.now() - startTime;
        if (this.counter > this.timesArr[this.trackCount].time*1.2) {
          // in this case, click didn't happened within the 20% of the current track's range therefor trackCount increased
          this.trackCount++;
        }
        if (startTime <= this.timesArr[this.timesArr.length-1].time) { 
        // checking the last time of the beat/bar so game can be still playable

      }else{
        // time passed the last beat's time there for game stopped
        clearInterval(this.timerRef);
      }
      });

      
  }
  moderateResponse(data:TrackModel): void{ 
    // this function is taking all "time"s and puts them in an array. Therefor we don't need to worry about how many elements in each section
    // since just need the time. At the end, we are treating the JSON file as a 1D array, this function will make our work easier
    let singleArr = [];
    for (let i = 0; i < data.track.length; i++) {
      for (let j = 0; j < data.track[i].singleSection.length; j++) {
        singleArr.push(data.track[i].singleSection[j].singleTrack);
      }
    }
    this.timesArr = singleArr;
  }
}
