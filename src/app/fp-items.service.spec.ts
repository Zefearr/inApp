import { TestBed, inject } from '@angular/core/testing';

import { FpItemsService } from './fp-items.service';

describe('FpItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FpItemsService]
    });
  });

  it('should be created', inject([FpItemsService], (service: FpItemsService) => {
    expect(service).toBeTruthy();
  }));
});
