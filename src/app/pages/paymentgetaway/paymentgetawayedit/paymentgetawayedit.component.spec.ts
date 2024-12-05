import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentgetawayeditComponent } from './paymentgetawayedit.component';

describe('PaymentgetawayeditComponent', () => {
  let component: PaymentgetawayeditComponent;
  let fixture: ComponentFixture<PaymentgetawayeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentgetawayeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentgetawayeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
