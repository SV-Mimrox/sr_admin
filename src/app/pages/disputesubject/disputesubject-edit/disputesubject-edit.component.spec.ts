import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesubjectEditComponent } from './disputesubject-edit.component';

describe('DisputesubjectEditComponent', () => {
  let component: DisputesubjectEditComponent;
  let fixture: ComponentFixture<DisputesubjectEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesubjectEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisputesubjectEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
