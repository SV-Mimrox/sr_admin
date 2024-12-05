import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentgetawaycreateComponent } from './paymentgetawaycreate.component';

describe('PaymentgetawaycreateComponent', () => {
  let component: PaymentgetawaycreateComponent;
  let fixture: ComponentFixture<PaymentgetawaycreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentgetawaycreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentgetawaycreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
