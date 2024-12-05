import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesubjectListComponent } from './disputesubject-list.component';

describe('DisputesubjectListComponent', () => {
  let component: DisputesubjectListComponent;
  let fixture: ComponentFixture<DisputesubjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesubjectListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisputesubjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
