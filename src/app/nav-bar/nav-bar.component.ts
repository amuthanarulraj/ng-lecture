import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { StickyService } from './../services/sticky.service';
import { Sticky } from './../models/sticky';
import { StickyAreaComponent } from '../sticky-area/sticky-area.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private stickyService: StickyService) {}

  createSticky() {
    this.stickyService.createSticky();
  }

  ngOnInit() {
  }
}
