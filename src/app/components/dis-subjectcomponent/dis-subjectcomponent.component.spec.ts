import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisSubjectcomponentComponent } from './dis-subjectcomponent.component';

describe('DisSubjectcomponentComponent', () => {
  let component: DisSubjectcomponentComponent;
  let fixture: ComponentFixture<DisSubjectcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisSubjectcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisSubjectcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
