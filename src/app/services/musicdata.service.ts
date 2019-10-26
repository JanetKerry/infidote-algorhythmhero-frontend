import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TrackModel } from '../models/trackModel';
import { MusicDataResponse } from '../models/musidata';

@Injectable({
  providedIn: 'root'
})
export class MusicdataService {

  constructor(private http: HttpClient) { }

  fetchMusicData(): Observable<MusicDataResponse> {
    return this.http.get<MusicDataResponse>(`http://localhost:3000/track`);
  }
}
