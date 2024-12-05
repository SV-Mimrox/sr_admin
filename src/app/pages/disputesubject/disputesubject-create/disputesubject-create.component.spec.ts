import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesubjectCreateComponent } from './disputesubject-create.component';

describe('DisputesubjectCreateComponent', () => {
  let component: DisputesubjectCreateComponent;
  let fixture: ComponentFixture<DisputesubjectCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesubjectCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisputesubjectCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
