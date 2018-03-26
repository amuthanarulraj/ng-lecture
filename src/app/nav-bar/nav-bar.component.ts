import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { StickyService } from './../services/sticky.service';
import { Sticky } from './../models/sticky';
import { StickyAreaComponent } from '../sticky-area/sticky-area.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() stickyAreaComponent: StickyAreaComponent
  @Output() newStickyEmitted = new EventEmitter<Sticky>();
  stickyService: StickyService;

  constructor(stickyService: StickyService) {
    this.stickyService = stickyService;
  }

  createSticky() {
    let newSticky: Sticky = this.stickyService.createSticky();
    this.newStickyEmitted.emit(newSticky);
  }

  ngOnInit() {
  }
}
