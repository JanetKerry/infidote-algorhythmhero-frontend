import { Component, OnInit } from '@angular/core';
import { MusicdataService } from 'src/app/services/musicdata.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private musicDataService: MusicdataService) { }

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
    this.getMusicData();
  }

  getMusicData() {
    this.musicDataService.fetchMusicData()
    .subscribe(data => console.log(data));
    }
}
