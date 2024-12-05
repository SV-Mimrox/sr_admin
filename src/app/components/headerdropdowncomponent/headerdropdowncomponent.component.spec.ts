import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderdropdowncomponentComponent } from './headerdropdowncomponent.component';

describe('HeaderdropdowncomponentComponent', () => {
  let component: HeaderdropdowncomponentComponent;
  let fixture: ComponentFixture<HeaderdropdowncomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderdropdowncomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderdropdowncomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
