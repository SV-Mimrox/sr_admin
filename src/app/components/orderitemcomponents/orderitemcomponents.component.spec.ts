import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderitemcomponentsComponent } from './orderitemcomponents.component';

describe('OrderitemcomponentsComponent', () => {
  let component: OrderitemcomponentsComponent;
  let fixture: ComponentFixture<OrderitemcomponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderitemcomponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderitemcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
