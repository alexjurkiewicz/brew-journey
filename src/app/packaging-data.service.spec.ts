import { TestBed, inject } from '@angular/core/testing';

import { PackagingDataService } from './packaging-data.service';

describe('PackagingDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PackagingDataService]
    });
  });

  it('should be created', inject([PackagingDataService], (service: PackagingDataService) => {
    expect(service).toBeTruthy();
  }));
});
