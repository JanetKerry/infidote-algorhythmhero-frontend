import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostleaderboardService {
  constructor(private http: HttpClient) {}
  postLeaderboard(name: string) {
    return this.http.post(
      `http://localhost:3000/leaderboard`,
      name,
      httpOptions
    );
  }
}
