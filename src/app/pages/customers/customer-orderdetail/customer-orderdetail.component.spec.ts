import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderdetailComponent } from './customer-orderdetail.component';

describe('CustomerOrderdetailComponent', () => {
  let component: CustomerOrderdetailComponent;
  let fixture: ComponentFixture<CustomerOrderdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerOrderdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerOrderdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
