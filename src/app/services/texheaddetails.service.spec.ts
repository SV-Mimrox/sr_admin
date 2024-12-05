import { TestBed } from '@angular/core/testing';

import { TexheaddetailsService } from './texheaddetails.service';

describe('TexheaddetailsService', () => {
  let service: TexheaddetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TexheaddetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
