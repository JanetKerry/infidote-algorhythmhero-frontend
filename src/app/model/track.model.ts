import { Beat } from './beat.model';

export class Track {
    tracks: Beat[];

    constructor (tracks: Beat[]) {
        this.tracks = tracks;
    }
}