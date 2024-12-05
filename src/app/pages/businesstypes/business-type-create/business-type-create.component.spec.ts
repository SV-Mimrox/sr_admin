import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessTypeCreateComponent } from './business-type-create.component';

describe('BusinessTypeCreateComponent', () => {
  let component: BusinessTypeCreateComponent;
  let fixture: ComponentFixture<BusinessTypeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessTypeCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
