import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersCategoryComponent } from './sellers-category.component';

describe('SellersCategoryComponent', () => {
  let component: SellersCategoryComponent;
  let fixture: ComponentFixture<SellersCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellersCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellersCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
