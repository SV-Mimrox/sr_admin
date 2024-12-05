import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeCreateComponent } from './dispute-create.component';

describe('DisputeCreateComponent', () => {
  let component: DisputeCreateComponent;
  let fixture: ComponentFixture<DisputeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisputeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
