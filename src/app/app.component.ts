import { Component } from '@angular/core';
import { Sticky } from './models/sticky';
import { StickyService } from './services/sticky.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  stickiesParent: Array<Sticky>;

  constructor(stickyService: StickyService) {
    this.stickiesParent = stickyService.getStickies();
  }

  addSticky(sticky: Sticky) {
    this.stickiesParent.push(sticky);
  }
}
