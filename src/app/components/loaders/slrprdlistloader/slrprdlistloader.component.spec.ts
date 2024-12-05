import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlrprdlistloaderComponent } from './slrprdlistloader.component';

describe('SlrprdlistloaderComponent', () => {
  let component: SlrprdlistloaderComponent;
  let fixture: ComponentFixture<SlrprdlistloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlrprdlistloaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlrprdlistloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
