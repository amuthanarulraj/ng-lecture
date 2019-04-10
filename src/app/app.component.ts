import { Component } from '@angular/core';
import { Sticky } from './models/sticky';
import { StickyService } from './services/sticky.service';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

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
