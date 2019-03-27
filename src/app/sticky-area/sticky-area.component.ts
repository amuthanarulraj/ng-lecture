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
  @Input() stickiesChild: Array<Sticky>;
  stickyService: StickyService;

  constructor(stickyService: StickyService) {
    this.stickyService = stickyService;
  }

  createSticky() {
    let newSticky$: Observable<Sticky> = this.stickyService.createSticky();
    newSticky$.subscribe(newSticky => {
      this.stickiesChild.push(newSticky);
    });
  }

  ngOnInit() {
  }

}
