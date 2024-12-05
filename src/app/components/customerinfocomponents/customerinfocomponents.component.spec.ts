import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerinfocomponentsComponent } from './customerinfocomponents.component';

describe('CustomerinfocomponentsComponent', () => {
  let component: CustomerinfocomponentsComponent;
  let fixture: ComponentFixture<CustomerinfocomponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerinfocomponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerinfocomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
