import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentinfocomponentsComponent } from './paymentinfocomponents.component';

describe('PaymentinfocomponentsComponent', () => {
  let component: PaymentinfocomponentsComponent;
  let fixture: ComponentFixture<PaymentinfocomponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentinfocomponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentinfocomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
