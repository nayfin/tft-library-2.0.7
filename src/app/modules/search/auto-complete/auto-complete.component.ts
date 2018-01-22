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
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'tft-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent extends BaseWidget {

  @Input() public placeholder = 'Search Item';
  @Input() public selectTitle = 'Select';
  @Input() public imageUrlParam = 'image';
  @Input() public clearTitle = 'Clear';
  @Input() public displayClearButton = true;
  @Input() public clearOnSubmit = true;

  @Input() public validators: Validators[] = [];
  // TODO: Define searchConfig class

  // Output events
  @Output() select = new EventEmitter();
  @Output() reset = new EventEmitter();
  @Output() submit = new EventEmitter();
  @Output() focus = new EventEmitter();
  @Output() blur = new EventEmitter();
  // @Output() change = new EventEmitter();

  // data of item selected from autocomplete dropdown
  selected: any;

  formContainer: FormGroup;

  public state = {
    query: '',
    refine: noop
  };

  constructor(
    @Inject(PLATFORM_ID) public platformId: Object,
    private fb: FormBuilder,
    searchInstance: TftInstantSearchInstance,
  ) {
    super(searchInstance, 'SearchBox');
    this.createWidget(connectSearchBox);

    this.formContainer = this.fb.group({
      'autocomplete': [null, this.validators]
    });
  }

  public handleChange(query: string) {
    // this.change.emit(query);
    this.state.refine(query);
  }

  public handleSelect(mouseEvent: MouseEvent, item: any) {
    // send submit event to parent component
    this.select.emit({ mouseEvent, item } );
    this.selected = item;
    event.preventDefault();
  }

  public handleSubmit(mouseEvent: MouseEvent) {
    // send submit event to parent component with selected item
    event.preventDefault();
    this.submit.emit({ mouseEvent, item : this.selected } );
    if ( this.clearOnSubmit ) {
      this.clearValue();
    }
  }

  public handleClear(event: MouseEvent) {
    // send reset event to parent component
    this.reset.emit(event);
    // reset search
    this.state.refine('');
    this.clearValue();
  }

  clearValue() {
    this.formContainer.get('autocomplete').reset();
  }
}

