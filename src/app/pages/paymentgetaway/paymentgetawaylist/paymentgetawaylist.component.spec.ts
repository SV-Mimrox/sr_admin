import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentgetawaylistComponent } from './paymentgetawaylist.component';

describe('PaymentgetawaylistComponent', () => {
  let component: PaymentgetawaylistComponent;
  let fixture: ComponentFixture<PaymentgetawaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentgetawaylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentgetawaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
