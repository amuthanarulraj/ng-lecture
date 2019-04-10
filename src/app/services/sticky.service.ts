import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sticky } from './../models/sticky';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class StickyService {

  stickyResource: string;
  stickyResourceURL: string;

  /**
   * Constructor.
   */
  constructor(private http: HttpClient) {
    this.stickyResource = 'stickies';
    this.stickyResourceURL = `${environment.serverBaseURL}/${this.stickyResource}`;
  }

  /**
   * Returns all stickies.
   *
   * @return {Observable} {Observable sticky array of stickies}
   */
  getStickies(): Observable<Array<Sticky>> {
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
    newSticky = sticky ? sticky : new Sticky('Untitled Sticky', '');
    return this.http.post<Sticky>(this.stickyResourceURL, newSticky);
  }
}
