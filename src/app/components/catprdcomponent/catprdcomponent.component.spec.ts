import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatprdcomponentComponent } from './catprdcomponent.component';

describe('CatprdcomponentComponent', () => {
  let component: CatprdcomponentComponent;
  let fixture: ComponentFixture<CatprdcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatprdcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatprdcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
