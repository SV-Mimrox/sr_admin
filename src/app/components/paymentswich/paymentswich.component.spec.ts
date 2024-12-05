import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentswichComponent } from './paymentswich.component';

describe('PaymentswichComponent', () => {
  let component: PaymentswichComponent;
  let fixture: ComponentFixture<PaymentswichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentswichComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentswichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
