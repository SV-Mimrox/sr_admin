import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPeriodEditComponent } from './business-period-edit.component';

describe('BusinessPeriodEditComponent', () => {
  let component: BusinessPeriodEditComponent;
  let fixture: ComponentFixture<BusinessPeriodEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessPeriodEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessPeriodEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
