import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlrcatlistloaderComponent } from './slrcatlistloader.component';

describe('SlrcatlistloaderComponent', () => {
  let component: SlrcatlistloaderComponent;
  let fixture: ComponentFixture<SlrcatlistloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlrcatlistloaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlrcatlistloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
