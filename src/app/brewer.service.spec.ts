import { TestBed, inject } from '@angular/core/testing';

import { BrewerService } from './brewer.service';

describe('BrewerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrewerService]
    });
  });

  it('should be created', inject([BrewerService], (service: BrewerService) => {
    expect(service).toBeTruthy();
  }));
});
