import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptioncomponentComponent } from './subscriptioncomponent.component';

describe('SubscriptioncomponentComponent', () => {
  let component: SubscriptioncomponentComponent;
  let fixture: ComponentFixture<SubscriptioncomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptioncomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptioncomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
