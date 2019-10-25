import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  constructor() { }
  playAudio(){
    let audio = new Audio();
    audio.src = "../../assets/music/chopsuey.mp3";
    audio.load();
    audio.play();
  }
  
  ngOnInit() {
  }
}
