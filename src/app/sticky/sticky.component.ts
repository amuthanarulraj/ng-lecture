import { Component, OnInit, Input } from '@angular/core';
import { Sticky } from './../models/sticky';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { StickyService } from '../services/sticky.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-sticky',
  templateUrl: './sticky.component.html',
  styleUrls: ['./sticky.component.scss']
})
export class StickyComponent implements OnInit {

  @Input() sticky: Sticky;
  classObject: Object = {
    sticky: true ? 'sticky': ''
  };
  styleObject: {top: number, left: number};

  constructor(private route: ActivatedRoute, private stickyService: StickyService) {

  }

  ngOnInit() {
    const sticky = this.sticky;
    if(!sticky) {
      this.route.paramMap.pipe(
        switchMap((params: ParamMap) => {
          return this.stickyService.getSticky(params.get('id'));
        })
      )
      .subscribe((item: Sticky) => {
        this.sticky = item;
        this.styleObject = this.getStickyPosition();
      });
    } else {
      this.styleObject = this.getStickyPosition();
    }
  }

  /**
   * Returns random top and left position with max allowed screen width.
   *
   * @function getStickyPosition
   * @return {Object} {Object with random top & left}
   * @public
   */
  getStickyPosition(): {top: number, left: number} {
    let stickySize: number = 250, //Width & Height of the sticky
        topPadding: number = 20, //Padding around nav bar
        vPadding: number = 10, //Padding on both left and right end of the screen
        navBarHeight: number = 50, //Height of the nav bar
        minTop: number = navBarHeight + topPadding, //Min top position should be nar bar height plus top padding
        maxScreenWidth: number = window.innerWidth - (stickySize + 2 * vPadding), //max width should exclude sticky width and padding
        maxScreenHeight: number = window.innerHeight - (stickySize + minTop), //max height should exclude sticky height and padding
        randomLeft: number = Math.ceil(Math.random() * maxScreenWidth), //Random left with max screen width
        randomTop: number = Math.ceil(Math.random() * maxScreenHeight); //Random top with max screen height
    randomTop = randomTop < minTop ? minTop : randomTop; //If random top is less than min top then use min top
    randomLeft = randomLeft < vPadding ? vPadding : randomLeft; //If random left is less than vPadding then use vPadding
    return {
        top: randomTop,
        left: randomLeft
    };
  }

}
