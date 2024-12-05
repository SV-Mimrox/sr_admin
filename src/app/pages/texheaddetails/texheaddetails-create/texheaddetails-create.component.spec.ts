import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexheaddetailsCreateComponent } from './texheaddetails-create.component';

describe('TexheaddetailsCreateComponent', () => {
  let component: TexheaddetailsCreateComponent;
  let fixture: ComponentFixture<TexheaddetailsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexheaddetailsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TexheaddetailsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
