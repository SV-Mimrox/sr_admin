import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessTypeEditComponent } from './business-type-edit.component';

describe('BusinessTypeEditComponent', () => {
  let component: BusinessTypeEditComponent;
  let fixture: ComponentFixture<BusinessTypeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessTypeEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
