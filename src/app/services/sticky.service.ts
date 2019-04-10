import { AddManyStickiesAction, AddStickyAction } from './../store/actions/sticky.actions';
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
    const stickies$: Observable<Array<Sticky>> = this.fetchStickiesFromStore().pipe(
      concatMap((result: Array<Sticky>) => {
        if (result.length <= 0) {
          return this.fetchStickiesFromAPI();
        }
        return stickies$;
      })
    );

    return stickies$;
  }

  private fetchStickiesFromAPI(): Observable<Array<Sticky>> {
    const stickies$: Observable<Array<Sticky>> = this.http.get<Array<Sticky>>(this.stickyResourceURL);
    stickies$.pipe(
      concatMap((result: Array<Sticky>) => {
        this.loadStickiesIntoStore(result);
        return this.fetchStickiesFromStore();
      })
    );
    return this.http.get<Array<Sticky>>(this.stickyResourceURL);
  }

  private fetchStickiesFromStore(): Observable<Array<Sticky>> {
    const stickies$: Observable<Array<Sticky>> = this.store.pipe(
      select('stickies')
    );
    return stickies$;
  }

  private loadStickiesIntoStore(stickies: Array<Sticky>): void {
    this.store.dispatch(new AddManyStickiesAction(stickies));
  }

  private loadStickyIntoStore(sticky: Sticky): void {
    this.store.dispatch(new AddStickyAction(sticky));
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
