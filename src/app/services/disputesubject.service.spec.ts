import { TestBed } from '@angular/core/testing';

import { DisputesubjectService } from './disputesubject.service';

describe('DisputesubjectService', () => {
  let service: DisputesubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisputesubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
