import { Component, OnInit } from '@angular/core';
import { MusicdataService } from 'src/app/services/musicdata.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private musicDataService: MusicdataService) { }

  ngOnInit() {
    this.getMusicData();
  }

  getMusicData() {
    this.musicDataService.fetchMusicData()
    .subscribe(data => console.log(data));
    }
}
