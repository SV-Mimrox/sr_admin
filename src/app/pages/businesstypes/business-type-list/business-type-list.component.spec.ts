import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessTypeListComponent } from './business-type-list.component';

describe('BusinessTypeListComponent', () => {
  let component: BusinessTypeListComponent;
  let fixture: ComponentFixture<BusinessTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessTypeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
