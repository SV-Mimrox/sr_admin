import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateiconcomponentComponent } from './createiconcomponent.component';

describe('CreateiconcomponentComponent', () => {
  let component: CreateiconcomponentComponent;
  let fixture: ComponentFixture<CreateiconcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateiconcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateiconcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
