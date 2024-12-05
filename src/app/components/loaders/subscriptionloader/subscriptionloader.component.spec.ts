import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionloaderComponent } from './subscriptionloader.component';

describe('SubscriptionloaderComponent', () => {
  let component: SubscriptionloaderComponent;
  let fixture: ComponentFixture<SubscriptionloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionloaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
