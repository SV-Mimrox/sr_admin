import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexheadloaderComponent } from './texheadloader.component';

describe('TexheadloaderComponent', () => {
  let component: TexheadloaderComponent;
  let fixture: ComponentFixture<TexheadloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexheadloaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TexheadloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
