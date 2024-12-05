import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispcomponentComponent } from './dispcomponent.component';

describe('DispcomponentComponent', () => {
  let component: DispcomponentComponent;
  let fixture: ComponentFixture<DispcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
