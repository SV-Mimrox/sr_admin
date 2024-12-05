import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelloptionEditComponent } from './selloption-edit.component';

describe('SelloptionEditComponent', () => {
  let component: SelloptionEditComponent;
  let fixture: ComponentFixture<SelloptionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelloptionEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelloptionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
