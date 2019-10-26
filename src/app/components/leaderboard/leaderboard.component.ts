import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from 'src/app/services/leaderboard.service';
import { LeaderboardResponse } from 'src/app/models/leaderboardResponse';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  leaderboard: LeaderboardResponse = new LeaderboardResponse();

  constructor(private leaderboardService: LeaderboardService) { }

  ngOnInit() {
    this.getLeaderboard();
  }

  getLeaderboard() {
    this.leaderboardService
      .fetchLeaderboard()
      .subscribe(data =>  {
          this.leaderboard = data;
      });
  }
}
