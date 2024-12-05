import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexheaddetailsListComponent } from './texheaddetails-list.component';

describe('TexheaddetailsListComponent', () => {
  let component: TexheaddetailsListComponent;
  let fixture: ComponentFixture<TexheaddetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexheaddetailsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TexheaddetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
