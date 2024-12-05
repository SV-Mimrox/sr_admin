import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdlistloaderComponent } from './prdlistloader.component';

describe('PrdlistloaderComponent', () => {
  let component: PrdlistloaderComponent;
  let fixture: ComponentFixture<PrdlistloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrdlistloaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrdlistloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
