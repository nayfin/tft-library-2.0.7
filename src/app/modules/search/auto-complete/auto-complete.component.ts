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
  /*
  **
  ** IMPORTANT
  ** autocomplete returns list of search results as user types
  ** each of the result items is an object, 
  ** if that object has a parameter for a url path to an image set imageUrlParam to the name of the parameter
  ** e.g.
  **
  ** in your algolia index if you have an index of objects that look like this:
  **
  **    {id: "q3lk4fk", name: "itemName", imageUrl: "www.imagelibrary.com/the/location/of/my/image.png"}
  **
  ** listen for the results list 
  **
  **
  */
  @Input() public imageUrlParam = 'image';
  // Text insid of clear button
  @Input() public clearTitle = 'Clear';
  // Do you want to display clear button?
  @Input() public displayClearButton = true;
  // Do you want to display the select button. MAKE SURE selectToSubmit IS NOT SET TO FALSE!!
  @Input() public displaySelectButton = true;
  // Resets state of instantSearch's autocomplete mechanisms on submission of selected item
  @Input() public clearOnSubmit = true;
  // Selecting item emits the submit event with the item's value
  @Input() public selectToSubmit = true;


  @Input() public validators: Validators[] = [];
  // TODO: Define searchConfig class

  // Output events
  @Output() change = new EventEmitter();
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
    this.change.emit(query);
    console.log(query);
    console.log("returned from this.state.refine(query);",this.state.refine(query));
  }

  public handleSelect(mouseEvent: MouseEvent, item: any) {
    // send submit event to parent component
    event.preventDefault();
    this.select.emit({ mouseEvent, item } );
    this.selected = item;
    if ( this.selectToSubmit ) {
      this.handleSubmit(mouseEvent);
    }
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

