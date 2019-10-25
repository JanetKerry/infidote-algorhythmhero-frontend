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
  counter: number = -1;
  timerRef;
  timeArr: TrackModel;
  constructor() { }

  ngOnInit() {
  }

  stopwatch(){
      const startTime = Date.now() - (this.counter || 0);
      this.timerRef = setInterval(() => {
        this.counter = Date.now() - startTime;
      });
      const firstArrLength = this.timeArr.track.length-1
      const secondArrLength = this.timeArr.track[firstArrLength].singleSection.length-1
      if (startTime <= this.timeArr.track[firstArrLength][secondArrLength].time) {
        // else finalyze
      }
      if(this.counter > this.timeArr.track[this.counter][0].time*0.9 && this.counter < this.timeArr[this.counter]*1.1 ){
        console.log('Great hit bitch');
        this.counter++
      }else{
        console.log('You can suck my dickie');
        this.counter++
      }
  }
}
