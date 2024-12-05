import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderloaderComponent } from './orderloader.component';

describe('OrderloaderComponent', () => {
  let component: OrderloaderComponent;
  let fixture: ComponentFixture<OrderloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderloaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
