import { Component, OnInit } from '@angular/core';
import { Sticky } from './models/sticky';
import { StickyService } from './services/sticky.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private stickyService: StickyService) {
  }

  ngOnInit() {
    this.stickyService.loadStickies();
  }
}
