import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPeriodCreateComponent } from './business-period-create.component';

describe('BusinessPeriodCreateComponent', () => {
  let component: BusinessPeriodCreateComponent;
  let fixture: ComponentFixture<BusinessPeriodCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessPeriodCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessPeriodCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
