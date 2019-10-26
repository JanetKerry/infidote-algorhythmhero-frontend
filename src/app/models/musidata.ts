export class MusicDataResponse {
    constructor(
        public track?: [{
            time?: number,
            type?: string
        }]
    ) { }
}
