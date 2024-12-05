import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersublistComponent } from './sellersublist.component';

describe('SellersublistComponent', () => {
  let component: SellersublistComponent;
  let fixture: ComponentFixture<SellersublistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellersublistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellersublistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
