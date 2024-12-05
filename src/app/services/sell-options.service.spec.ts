import { TestBed } from '@angular/core/testing';

import { SellOptionsService } from './sell-options.service';

describe('SellOptionsService', () => {
  let service: SellOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
