import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdropdowncontrolconcomponentComponent } from './searchdropdowncontrolconcomponent.component';

describe('SearchdropdowncontrolconcomponentComponent', () => {
  let component: SearchdropdowncontrolconcomponentComponent;
  let fixture: ComponentFixture<SearchdropdowncontrolconcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchdropdowncontrolconcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchdropdowncontrolconcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
