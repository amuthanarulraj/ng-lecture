import { Component, OnInit, Input } from '@angular/core';
import { Sticky } from './../models/sticky';
import { StickyService } from './../services/sticky.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sticky-area',
  templateUrl: './sticky-area.component.html',
  styleUrls: ['./sticky-area.component.scss']
})
export class StickyAreaComponent implements OnInit {
  stickies: Array<Sticky>;

  constructor(private stickyService: StickyService) {}

  ngOnInit() {
    this.stickyService.getStickies()
      .subscribe(stickies => {
        this.stickies = stickies;
      });
  }

}
