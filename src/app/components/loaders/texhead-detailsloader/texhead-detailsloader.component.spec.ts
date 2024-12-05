import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexheadDetailsloaderComponent } from './texhead-detailsloader.component';

describe('TexheadDetailsloaderComponent', () => {
  let component: TexheadDetailsloaderComponent;
  let fixture: ComponentFixture<TexheadDetailsloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexheadDetailsloaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TexheadDetailsloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
