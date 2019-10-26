export class LeaderboardResponse {
    constructor(
        public scores?: [{
            name?: string,
            score?: number
        }]
    ) { }
}
