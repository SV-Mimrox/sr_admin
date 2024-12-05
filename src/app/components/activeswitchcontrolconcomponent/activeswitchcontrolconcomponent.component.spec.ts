import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveswitchcontrolconcomponentComponent } from './activeswitchcontrolconcomponent.component';

describe('ActiveswitchcontrolconcomponentComponent', () => {
  let component: ActiveswitchcontrolconcomponentComponent;
  let fixture: ComponentFixture<ActiveswitchcontrolconcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveswitchcontrolconcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveswitchcontrolconcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
