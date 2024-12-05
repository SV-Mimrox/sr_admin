import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerslistloaderComponent } from './sellerslistloader.component';

describe('SellerslistloaderComponent', () => {
  let component: SellerslistloaderComponent;
  let fixture: ComponentFixture<SellerslistloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerslistloaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerslistloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
