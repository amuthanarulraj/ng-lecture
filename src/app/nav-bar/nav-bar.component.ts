import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StickyService } from './../services/sticky.service';
import { Sticky } from './../models/sticky';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

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
