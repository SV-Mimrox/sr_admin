import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexheaddetailsEditComponent } from './texheaddetails-edit.component';

describe('TexheaddetailsEditComponent', () => {
  let component: TexheaddetailsEditComponent;
  let fixture: ComponentFixture<TexheaddetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexheaddetailsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TexheaddetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
