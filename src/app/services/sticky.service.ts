import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sticky } from './../models/sticky';

import { AppConstants } from './../common/app-constants';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StickyService {

  stickyResource: string;
  stickyResourceURL: string;

  /**
   * Constructor.
   */
  constructor(private http: HttpClient) {
    this.stickyResource = 'stickies';
    this.stickyResourceURL = `${AppConstants.STICKY_SERVER_BASE_URL}/${this.stickyResource}`;
  }

  /**
   * Returns all stickies.
   *
   * @return {Observable} {Observable sticky array of stickies}
   */
  getStickies(): Observable<Sticky[]> {
    return this.http.get<Array<Sticky>>(this.stickyResourceURL);
  }

  /**
   * Creates new sticky.
   *
   * @param  {Sticky} sticky: Sticky {new sticky object}
   * @return {Observable} {Observable for saved sticky object}
   */
  createSticky(sticky: Sticky = null): Observable<Sticky> {
    let newSticky: Sticky;
    newSticky = sticky ? sticky : new Sticky("Untitled Sticky", "");
    return this.http.post<Sticky>(this.stickyResourceURL, newSticky);
  }
}
