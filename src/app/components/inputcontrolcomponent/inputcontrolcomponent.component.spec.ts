import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputcontrolcomponentComponent } from './inputcontrolcomponent.component';

describe('InputcontrolcomponentComponent', () => {
  let component: InputcontrolcomponentComponent;
  let fixture: ComponentFixture<InputcontrolcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputcontrolcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputcontrolcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
