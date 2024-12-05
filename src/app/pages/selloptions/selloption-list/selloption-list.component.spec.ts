import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelloptionListComponent } from './selloption-list.component';

describe('SelloptionListComponent', () => {
  let component: SelloptionListComponent;
  let fixture: ComponentFixture<SelloptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelloptionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelloptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
