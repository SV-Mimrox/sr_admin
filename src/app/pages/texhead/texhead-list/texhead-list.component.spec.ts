import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexheadListComponent } from './texhead-list.component';

describe('TexheadListComponent', () => {
  let component: TexheadListComponent;
  let fixture: ComponentFixture<TexheadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexheadListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TexheadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
