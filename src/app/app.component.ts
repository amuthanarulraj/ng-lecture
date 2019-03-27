import { Component } from '@angular/core';
import { Sticky } from './models/sticky';
import { StickyService } from './services/sticky.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  stickiesParent: Array<Sticky>;

  constructor(stickyService: StickyService) {
    let stickies$: Observable<Array<Sticky>> = stickyService.getStickies();
    stickies$.subscribe(stickies => {
      this.stickiesParent = stickies;
    });
  }

  addSticky(sticky: Sticky) {
    this.stickiesParent.push(sticky);
  }
}
