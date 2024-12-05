import { TestBed } from '@angular/core/testing';

import { TexheadService } from './texhead.service';

describe('TexheadService', () => {
  let service: TexheadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TexheadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
