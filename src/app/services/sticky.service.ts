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
   * Id sequence.
   */
  idSeq: number;

  /**
   * Constructor.
   */
  constructor() {
    this.stickies = [];
    this.idSeq = 1;
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
    let idSeq =  this.idSeq,
        newSticky: Sticky;
    idSeq += 1;
    newSticky = sticky ? sticky : new Sticky("Untitled Sticky", "");
    newSticky.id = idSeq;
    this.idSeq = idSeq;
    return newSticky;
  }
}
