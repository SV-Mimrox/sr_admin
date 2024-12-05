import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsonlineComponent } from './isonline.component';

describe('IsonlineComponent', () => {
  let component: IsonlineComponent;
  let fixture: ComponentFixture<IsonlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsonlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsonlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
