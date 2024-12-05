import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersubloaderComponent } from './sellersubloader.component';

describe('SellersubloaderComponent', () => {
  let component: SellersubloaderComponent;
  let fixture: ComponentFixture<SellersubloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellersubloaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellersubloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
