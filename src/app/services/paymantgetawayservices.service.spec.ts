import { TestBed } from '@angular/core/testing';

import { PaymantgetawayservicesService } from './paymantgetawayservices.service';

describe('PaymantgetawayservicesService', () => {
  let service: PaymantgetawayservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymantgetawayservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
