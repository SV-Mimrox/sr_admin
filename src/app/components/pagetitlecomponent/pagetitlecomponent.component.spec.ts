import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagetitlecomponentComponent } from './pagetitlecomponent.component';

describe('PagetitlecomponentComponent', () => {
  let component: PagetitlecomponentComponent;
  let fixture: ComponentFixture<PagetitlecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagetitlecomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagetitlecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
