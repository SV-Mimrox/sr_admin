import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexheadCreateComponent } from './texhead-create.component';

describe('TexheadCreateComponent', () => {
  let component: TexheadCreateComponent;
  let fixture: ComponentFixture<TexheadCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexheadCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TexheadCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
