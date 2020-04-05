import { add as addSticky, addMany as addManyStickies } from './../store/actions/sticky.actions';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sticky } from './../models/sticky';

import { Observable } from 'rxjs';
import { take, concatMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/state';

@Injectable()
export class StickyService {

  stickyResource: string;
  stickyResourceURL: string;

  /**
   * Constructor.
   */
  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) {
    this.stickyResource = 'stickies';
    this.stickyResourceURL = `${environment.serverBaseURL}/${this.stickyResource}`;
  }

  /**
   * Returns all stickies.
   *
   * @return {Observable} {Observable sticky array of stickies}
   */
  public getStickies(): Observable<Array<Sticky>> {
    const stickies$: Observable<Array<Sticky>> = this.store.pipe(
      select('stickies')
    );
    return stickies$;
  }

  public loadStickies(): void {
    const stickies$: Observable<Array<Sticky>> = this.http.get<Array<Sticky>>(this.stickyResourceURL);
    stickies$.subscribe(stickies => {
      this.loadStickiesIntoStore(stickies);
    });
  }

  private loadStickiesIntoStore(stickies: Array<Sticky>): void {
    this.store.dispatch(addManyStickies({stickies}));
  }

  private loadStickyIntoStore(sticky: Sticky): void {
    this.store.dispatch(addSticky({sticky}));
  }

  /**
   * Creates new sticky.
   *
   * @param  {Sticky} sticky: Sticky {new sticky object}
   */
  public createSticky(sticky: Sticky = null): void {
    let newSticky: Sticky;
    newSticky = sticky ? sticky : new Sticky('Untitled Sticky', '');
    const newSticky$ = this.http.post<Sticky>(this.stickyResourceURL, newSticky);
    newSticky$.subscribe(s => {
      this.loadStickyIntoStore(s);
    });
  }
}
