import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerlistcomponentComponent } from './sellerlistcomponent.component';

describe('SellerlistcomponentComponent', () => {
  let component: SellerlistcomponentComponent;
  let fixture: ComponentFixture<SellerlistcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerlistcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerlistcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
