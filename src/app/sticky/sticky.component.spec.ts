import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyComponent } from './sticky.component';
import { Sticky } from '../models/sticky';
import { FormsModule } from '@angular/forms';

fdescribe('StickyComponent', () => {
  let component: StickyComponent;
  let fixture: ComponentFixture<StickyComponent>;
  let mockSticky: Sticky

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ StickyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    mockSticky = new Sticky("Title", "Content");
    mockSticky.id = 1;
    fixture = TestBed.createComponent(StickyComponent);
    component = fixture.componentInstance;
    component.sticky = mockSticky;
    fixture.detectChanges();
  });

  it('should create sticky component', () => {
    expect(component).toBeTruthy();
  });

  it('should create sticky component with id', () => {
    expect(component.sticky.id).toBe(mockSticky.id);
  });

  it('should create sticky component with title', () => {
    const title: HTMLElement = fixture.nativeElement.querySelector('.sticky-title');
    expect(title.getAttribute('name')).toBe('Title');
  });
});
