import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexheadDetailscomponentComponent } from './texhead-detailscomponent.component';

describe('TexheadDetailscomponentComponent', () => {
  let component: TexheadDetailscomponentComponent;
  let fixture: ComponentFixture<TexheadDetailscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexheadDetailscomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TexheadDetailscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
