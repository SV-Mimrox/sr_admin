import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlrcstcomponentComponent } from './slrcstcomponent.component';

describe('SlrcstcomponentComponent', () => {
  let component: SlrcstcomponentComponent;
  let fixture: ComponentFixture<SlrcstcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlrcstcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlrcstcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
