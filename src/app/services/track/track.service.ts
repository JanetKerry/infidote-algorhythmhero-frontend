import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Track } from 'src/app/model/track.model';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private baseUrl = environment.baseUrl;
  private trackUrl = environment.trackUrl;
  constructor (private http: HttpClient) { }

  getTrack(): Observable<Track> {
    const url = this.baseUrl + this.trackUrl;
    return this.http.get<Track>(url);
  }
}
