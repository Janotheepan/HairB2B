import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylistSetComponent } from './stylist-set.component';

describe('StylistSetComponent', () => {
  let component: StylistSetComponent;
  let fixture: ComponentFixture<StylistSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylistSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylistSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
