export class MusicDataResponse {
    constructor(
        public tracks?: [
            [{
                time?: number,
                type?: string
            }]
        ]
    ) { }
}
