import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlrcstloaderComponent } from './slrcstloader.component';

describe('SlrcstloaderComponent', () => {
  let component: SlrcstloaderComponent;
  let fixture: ComponentFixture<SlrcstloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlrcstloaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlrcstloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
