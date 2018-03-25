import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Sticky } from './../models/sticky';

@Injectable()
export class StickyService {

  /**
   * Array of stickies.
   *
   * @property
   * @private
   */
  stickies: Array<Sticky>;

  /**
   * Constructor.
   */
  constructor() {
    this.stickies = [];
  }

  /**
   * Returns all stickies.
   *
   * @return {Array} {Array of stickies}
   */
  getStickies(): Array<Sticky> {
    return this.stickies;
  }

  /**
   * Creates new sticky.
   *
   * @param  {Sticky} sticky: Sticky {new sticky object}
   * @return {Sticky} {saved sticky object}
   */
  createSticky(sticky: Sticky = null): Sticky {
    let newSticky: Sticky = sticky ? sticky : new Sticky("Untitled Sticky", "");
    return newSticky;
  }
}
