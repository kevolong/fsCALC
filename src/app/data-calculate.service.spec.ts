import { TestBed } from '@angular/core/testing';

import { DataCalculateService } from './data-calculate.service';

describe('DataCalculateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataCalculateService = TestBed.get(DataCalculateService);
    expect(service).toBeTruthy();
  });
});
