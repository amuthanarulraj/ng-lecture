import { Component, OnInit, Input } from '@angular/core';
import { Sticky } from './../models/sticky';
import { StickyService } from './../services/sticky.service';

@Component({
  selector: 'app-sticky-area',
  templateUrl: './sticky-area.component.html',
  styleUrls: ['./sticky-area.component.scss']
})
export class StickyAreaComponent implements OnInit {
  @Input() stickiesChild: Array<Sticky>;
  stickyService: StickyService;

  constructor(stickyService: StickyService) {
    this.stickyService = stickyService;
  }

  createSticky() {
    this.stickiesChild.push(this.stickyService.createSticky())
  }

  ngOnInit() {
  }

}
