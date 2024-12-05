import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelloptionCreateComponent } from './selloption-create.component';

describe('SelloptionCreateComponent', () => {
  let component: SelloptionCreateComponent;
  let fixture: ComponentFixture<SelloptionCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelloptionCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelloptionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
