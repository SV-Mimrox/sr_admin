import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPeriodListComponent } from './business-period-list.component';

describe('BusinessPeriodListComponent', () => {
  let component: BusinessPeriodListComponent;
  let fixture: ComponentFixture<BusinessPeriodListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessPeriodListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessPeriodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
