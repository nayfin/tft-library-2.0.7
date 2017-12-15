import {
  Inject,
  Input,
  Component,
  ContentChild,
  TemplateRef,
  PLATFORM_ID
} from '@angular/core';

import { connectHits } from 'instantsearch.js/es/connectors';
import { isFunction } from 'lodash-es';

import { BaseWidget } from '../base-widget';
import { TftInstantSearchInstance } from '../instantsearch/instantsearch-instance';

@Component({
  selector: 'tft-results',
  templateUrl: 'results.component.html'
})
export class TftResultsComponent extends BaseWidget {
  @ContentChild(TemplateRef) public template?: TemplateRef<any>;

  // render options
  @Input() transformItems?: Function;

  // inner widget state returned from connector
  public state: { hits: {}[]; results: {} } = { hits: [], results: {} };

  constructor(
    @Inject(PLATFORM_ID) public plateformId: Object,
    searchInstance: TftInstantSearchInstance
  ) {
    super(searchInstance, 'Results');
    this.createWidget(connectHits, { escapeHits: true });
  }

  updateState = (
    state: { hits: {}[]; results: {} },
    isFirstRendering: boolean
  ) => {
    if (isFirstRendering) { return; }

    this.state = {
      ...state,
      results: state.results,
      hits: isFunction(this.transformItems)
        ? this.transformItems(state.hits)
        : state.hits
    };
  }
}
