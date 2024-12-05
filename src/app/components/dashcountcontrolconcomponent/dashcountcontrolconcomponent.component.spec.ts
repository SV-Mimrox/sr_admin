import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashcountcontrolconcomponentComponent } from './dashcountcontrolconcomponent.component';

describe('DashcountcontrolconcomponentComponent', () => {
  let component: DashcountcontrolconcomponentComponent;
  let fixture: ComponentFixture<DashcountcontrolconcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashcountcontrolconcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashcountcontrolconcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
