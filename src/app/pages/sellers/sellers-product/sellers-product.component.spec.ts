import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersProductComponent } from './sellers-product.component';

describe('SellersProductComponent', () => {
  let component: SellersProductComponent;
  let fixture: ComponentFixture<SellersProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellersProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellersProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
