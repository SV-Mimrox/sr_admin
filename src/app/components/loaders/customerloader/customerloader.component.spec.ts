import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerloaderComponent } from './customerloader.component';

describe('CustomerloaderComponent', () => {
  let component: CustomerloaderComponent;
  let fixture: ComponentFixture<CustomerloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerloaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
