import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultswichComponent } from './defaultswich.component';

describe('DefaultswichComponent', () => {
  let component: DefaultswichComponent;
  let fixture: ComponentFixture<DefaultswichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultswichComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultswichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
