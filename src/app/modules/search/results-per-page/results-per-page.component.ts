import { Component, Input, Inject, PLATFORM_ID } from '@angular/core';
import { connectHitsPerPage } from 'instantsearch.js/es/connectors';
import { noop } from 'lodash-es';

import { BaseWidget } from '../base-widget';
import { TftInstantSearchInstance } from '../instantsearch/instantsearch-instance';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

export type ResultsPerPageState = {
  items: {}[];
  refine: Function;
};

@Component({
  selector: 'tft-results-per-page',
  templateUrl: 'results-per-page.component.html'
})
export class TftResultsPerPageComponent extends BaseWidget implements OnInit {
  @Input()
  public items: {
    value: number;
    label: string;
    default?: boolean;
  }[];

  public state: ResultsPerPageState = {
    items: [],
    refine: noop
  };

  constructor(
    @Inject(PLATFORM_ID) public platformId: Object,
    searchInstance: TftInstantSearchInstance
  ) {
    super(searchInstance, 'ResultsPerPage');
  }

  ngOnInit() {
    this.createWidget(connectHitsPerPage, { items: this.items });
    super.ngOnInit();
  }
}
