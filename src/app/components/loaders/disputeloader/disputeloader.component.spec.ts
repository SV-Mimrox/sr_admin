import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeloaderComponent } from './disputeloader.component';

describe('DisputeloaderComponent', () => {
  let component: DisputeloaderComponent;
  let fixture: ComponentFixture<DisputeloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeloaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisputeloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
