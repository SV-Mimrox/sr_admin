import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownconcomponentComponent } from './dropdownconcomponent.component';

describe('DropdownconcomponentComponent', () => {
  let component: DropdownconcomponentComponent;
  let fixture: ComponentFixture<DropdownconcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownconcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownconcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
