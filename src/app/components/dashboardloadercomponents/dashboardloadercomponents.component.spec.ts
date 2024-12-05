import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardloadercomponentsComponent } from './dashboardloadercomponents.component';

describe('DashboardloadercomponentsComponent', () => {
  let component: DashboardloadercomponentsComponent;
  let fixture: ComponentFixture<DashboardloadercomponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardloadercomponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardloadercomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
