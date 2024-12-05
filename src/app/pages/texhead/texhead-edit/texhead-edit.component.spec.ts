import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexheadEditComponent } from './texhead-edit.component';

describe('TexheadEditComponent', () => {
  let component: TexheadEditComponent;
  let fixture: ComponentFixture<TexheadEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexheadEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TexheadEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
