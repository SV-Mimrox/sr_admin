import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersebscrtionlistComponent } from './sellersebscrtionlist.component';

describe('SellersebscrtionlistComponent', () => {
  let component: SellersebscrtionlistComponent;
  let fixture: ComponentFixture<SellersebscrtionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellersebscrtionlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellersebscrtionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
