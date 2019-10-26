import { TestBed } from '@angular/core/testing';

import { MusicdataService } from './musicdata.service';

describe('MusicdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusicdataService = TestBed.get(MusicdataService);
    expect(service).toBeTruthy();
  });
});
