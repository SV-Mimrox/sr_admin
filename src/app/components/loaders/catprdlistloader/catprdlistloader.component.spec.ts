import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatprdlistloaderComponent } from './catprdlistloader.component';

describe('CatprdlistloaderComponent', () => {
  let component: CatprdlistloaderComponent;
  let fixture: ComponentFixture<CatprdlistloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatprdlistloaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatprdlistloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
