import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyAreaComponent } from './sticky-area.component';

describe('StickyAreaComponent', () => {
  let component: StickyAreaComponent;
  let fixture: ComponentFixture<StickyAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickyAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
