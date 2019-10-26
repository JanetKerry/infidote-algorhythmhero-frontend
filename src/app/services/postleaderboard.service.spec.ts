import { TestBed } from '@angular/core/testing';

import { PostleaderboardService } from './postleaderboard.service';

describe('PostleaderboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostleaderboardService = TestBed.get(PostleaderboardService);
    expect(service).toBeTruthy();
  });
});
