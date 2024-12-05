import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersCategoriesComponent } from './sellers-categories.component';

describe('SellersCategoriesComponent', () => {
  let component: SellersCategoriesComponent;
  let fixture: ComponentFixture<SellersCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellersCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellersCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
