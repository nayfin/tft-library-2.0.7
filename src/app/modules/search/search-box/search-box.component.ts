import {
  Component,
  Input,
  Output,
  EventEmitter,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { connectSearchBox } from 'instantsearch.js/es/connectors';
import { noop } from 'lodash-es';

import { BaseWidget } from '../base-widget';
import { TftInstantSearchInstance } from '../instantsearch/instantsearch-instance';

@Component({
  selector: 'tft-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['search-box.component.scss']
})
export class TftSearchBoxComponent extends BaseWidget {
  @Input() public placeholder = 'Search';
  @Input() public submitTitle = 'Submit';
  @Input() public resetTitle = 'Reset';
  @Input() public searchAsYouType = true;
  @Input() public displayResetButton = false;

  // Output events
  // form
  @Output() submit = new EventEmitter();
  @Output() reset = new EventEmitter();

  // input
  @Output() change = new EventEmitter();
  @Output() focus = new EventEmitter();
  @Output() blur = new EventEmitter();

  chipColor = 'accent'
  public state = {
    query: '',
    refine: noop
  };

  constructor(
    @Inject(PLATFORM_ID) public platformId: Object,
    searchInstance: TftInstantSearchInstance
  ) {
    super(searchInstance, 'SearchBox');
    this.createWidget(connectSearchBox);
  }

  public handleChange(query: string) {
    this.change.emit(query);

    if (this.searchAsYouType) {
      this.state.refine(query);
    }
  }

  public handleSubmit(event: MouseEvent) {
    // send submit event to parent component
    this.submit.emit(event);

    event.preventDefault();

    if (!this.searchAsYouType) {
      this.state.refine(this.state.query);
    }
  }

  public handleReset(event: MouseEvent) {
    // send reset event to parent component
    this.reset.emit(event);

    // reset search
    this.state.refine('');
  }
}
