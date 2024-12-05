import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexheadcomponentComponent } from './texheadcomponent.component';

describe('TexheadcomponentComponent', () => {
  let component: TexheadcomponentComponent;
  let fixture: ComponentFixture<TexheadcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexheadcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TexheadcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
