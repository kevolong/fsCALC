import { TestBed } from '@angular/core/testing';

import { CodecDataService } from './codec-data.service';

describe('CodecDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CodecDataService = TestBed.get(CodecDataService);
    expect(service).toBeTruthy();
  });
});
