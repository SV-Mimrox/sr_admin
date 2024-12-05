import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeEditComponent } from './dispute-edit.component';

describe('DisputeEditComponent', () => {
  let component: DisputeEditComponent;
  let fixture: ComponentFixture<DisputeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisputeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
