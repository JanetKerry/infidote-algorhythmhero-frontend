import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LeaderboardResponse } from '../models/leaderboardResponse';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor(private http: HttpClient) { }

  fetchLeaderboard(): Observable<LeaderboardResponse> {
    return this.http.get<LeaderboardResponse>(`http://localhost:3000/leaderboard`);
  }
}
