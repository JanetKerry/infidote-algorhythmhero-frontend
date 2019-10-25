import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamelogic',
  templateUrl: './gamelogic.component.html',
  styleUrls: ['./gamelogic.component.scss']
})
export class GamelogicComponent implements OnInit {

  timeCounter: number;
  running: boolean = false;
  counter: number = -1;
  constructor() { }

  ngOnInit() {
  }

}
