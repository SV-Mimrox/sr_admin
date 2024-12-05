import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableloaderComponent } from './tableloader.component';

describe('TableloaderComponent', () => {
  let component: TableloaderComponent;
  let fixture: ComponentFixture<TableloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableloaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
