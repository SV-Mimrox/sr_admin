import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisSubjectloaderComponent } from './dis-subjectloader.component';

describe('DisSubjectloaderComponent', () => {
  let component: DisSubjectloaderComponent;
  let fixture: ComponentFixture<DisSubjectloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisSubjectloaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisSubjectloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
