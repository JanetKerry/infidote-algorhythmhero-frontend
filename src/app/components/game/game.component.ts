import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  audio= new Audio();
  constructor() { }
  playAudio(){
    this.audio.src = "../../assets/music/chopsuey.mp3";
    this.audio.load();
    this.audio.play();
  }
  stopAudio(){
    this.audio.pause();
  }
  
  ngOnInit() {
  }
}
