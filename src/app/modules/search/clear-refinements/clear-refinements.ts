import { Component, Input, Inject, PLATFORM_ID } from '@angular/core';
import { connectClearAll } from 'instantsearch.js/es/connectors';
import { noop } from 'lodash-es';

import { BaseWidget } from '../base-widget';
import { TftInstantSearchInstance } from '../instantsearch/instantsearch-instance';

@Component({
  selector: 'ng-ais-clear-refinements',
  template: `
    <div [class]="cx()">
      <ng-ais-header [header]="header" [className]="cx('header')"></ng-ais-header>

      <div [class]="cx('body')">
        <button
          [class]="cx('button') + (!state.hasRefinements ? (' ' + cx('button', 'disabled')) : '')"
          (click)="handleClick($event)"
          [disabled]="!state.hasRefinements"
        >
          {{buttonLabel}}
        </button>
      </div>

      <ng-ais-footer [footer]="footer" [className]="cx('footer')"></ng-ais-footer>
    </div>
  `
})
export class NgAisClearRefinements extends BaseWidget {
  @Input() public buttonLabel: string = 'Clear refinements';
  @Input() public clearsQuery: boolean = false;
  @Input() public excludeAttributes: string[] = [];

  public state = { hasRefinements: false, refine: noop };

  constructor(
    @Inject(PLATFORM_ID) public platformId: Object,
    searchInstance: TftInstantSearchInstance
  ) {
    super(searchInstance, 'ClearRefinements');
  }

  public ngOnInit() {
    // we need to `createWidget` from `ngOnInit` to have `@Input()` intialized
    this.createWidget(connectClearAll, {
      clearsQuery: this.clearsQuery,
      excludeAttributes: this.excludeAttributes
    });

    super.ngOnInit();
  }

  public handleClick(event: MouseEvent) {
    event.preventDefault();

    if (this.state.hasRefinements) {
      this.state.refine();
    }
  }
}
