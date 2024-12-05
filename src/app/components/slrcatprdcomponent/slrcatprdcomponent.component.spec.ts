import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlrcatprdcomponentComponent } from './slrcatprdcomponent.component';

describe('SlrcatprdcomponentComponent', () => {
  let component: SlrcatprdcomponentComponent;
  let fixture: ComponentFixture<SlrcatprdcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlrcatprdcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlrcatprdcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
