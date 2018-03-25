import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Sticky } from './../models/sticky';

@Injectable()
export class StickyService {

  stickies: Array<Sticky> = [];

  constructor() {
  }

  getStickies(): Array<Sticky> {
    return this.stickies;
  }

  createSticky(sticky: Sticky = null): Sticky {
    let newSticky: Sticky = sticky ? sticky : new Sticky("Untitled Sticky", "");
    return newSticky;
  }
}
