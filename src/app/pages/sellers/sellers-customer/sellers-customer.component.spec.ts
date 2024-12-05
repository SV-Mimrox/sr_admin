import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersCustomerComponent } from './sellers-customer.component';

describe('SellersCustomerComponent', () => {
  let component: SellersCustomerComponent;
  let fixture: ComponentFixture<SellersCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellersCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellersCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
