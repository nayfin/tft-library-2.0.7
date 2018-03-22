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
import { ALGOLIA_LOGO_URL } from '../utils';
import { MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'tft-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent extends BaseWidget {

  @Input() public placeholder = 'Type to search';
  @Input() public algoliaLogo = ALGOLIA_LOGO_URL;
  @Input() public algoliaAttribution = true;

  /*
  **
  ** IMPORTANT
  ** autocomplete returns list of search results as user types
  ** each of the result items is an object
  ** if that object has a parameter for a url path to an image, then set imageUrlParam to the name of the parameter
  ** e.g.
  **
  ** in your algolia index if you have an index of objects that look like this:
  **
  **    {id: "q3lk4fk", name: "itemName", imageUrl: "www.imagelibrary.com/the/location/of/my/image.png"}
  **
  ** then you would want to tft-autocomplete where to look
  **
  **    <tft-autocomplete [imageUrlParam]="imageUrl"></tft-autocomplete>
  **
  */
  @Input() public imageUrlParam = 'image';
  // Text insid of select button
  @Input() public selectTitle = 'SELECT';
  // Text insid of clear button
  @Input() public clearTitle = 'CLEAR';
  // Do you want to display clear button?
  @Input() public displayClearButton = false;
  // Do you want to display the select button. MAKE SURE selectToSubmit IS NOT SET TO FALSE!!
  @Input() public displaySelectButton = false;
  // Resets state of instantSearch's autocomplete mechanisms on submission of selected item
  @Input() public clearOnSubmit = false;
  // Selecting item emits the submit event with the item's value
  // @Input() public selectToSubmit = false;


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

  algoliaLogoPath = ALGOLIA_LOGO_URL;
  public state: any = {
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
      'autocomplete': [null, [Validators.required, ...this.validators]]
    });

  }

  public handleChange( query: string ) {
    this.formContainer.setErrors({'valueSelected': false});
    this.state.refine(query);
    const hits = this.state.instantSearchInstance ? this.state.instantSearchInstance.helper.lastResults.hits : [];
    this.change.emit({query, hits});
  }

  public handleSelect( event: MatAutocompleteSelectedEvent ) {
    const item = event.option.value;
    this.select.emit({ item } );
    this.selected = item;
    // if ( this.selectToSubmit) {
    //   this.handleSubmit();
    // }
  }

  public handleSubmit(event: MouseEvent | KeyboardEvent) {
    // send submit event to parent component with selected item
    if ( event ) {
      event.preventDefault();
    }
    this.submit.emit({ event, item : this.selected } );
    if ( this.clearOnSubmit ) {
      this.clearValue();
    }
  }

  public handleClear(event: MouseEvent | KeyboardEvent) {
    // send reset event to parent component
    this.reset.emit(event);
    // reset search
    this.state.refine('');
    this.clearValue();
  }

  clearValue() {
    this.formContainer.get('autocomplete').reset();
  }
  // used to map selected items name to autocomplete input
  mapToName(val) {
    return val ? val.name : '';
  }

}

