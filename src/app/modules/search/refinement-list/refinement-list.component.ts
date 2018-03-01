import { Component, Input, Inject, OnInit, AfterContentChecked, ViewChild, PLATFORM_ID } from '@angular/core';
import { connectRefinementList } from 'instantsearch.js/es/connectors';
import { noop, isFunction } from 'lodash-es';
import { connectSearchBox } from 'instantsearch.js/es/connectors';

import { BaseWidget } from '../base-widget';
import { TftInstantSearchInstance } from '../instantsearch/instantsearch-instance';
import { parseNumberInput, ALGOLIA_LOGO_URL } from '../utils';
import { MatSelect, MatSelectChange } from '@angular/material';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

export interface RefinementListState {
  canRefine: boolean;
  // canToggleShowMore: boolean;
  createURL: Function;
  // isShowingMore: boolean;
  items: {}[];
  refine: Function;
  searchForItems: Function;
  isFormSearch: boolean;
}

export interface RefinementListItem {
  isRefined: boolean;
  value: string;
}

@Component({
  selector: 'tft-refinement-list',
  templateUrl: 'refinement-list.component.html',
  styleUrls: ['refinement-list.component.scss'],
})
export class TftRefinementListComponent extends BaseWidget implements OnInit, AfterContentChecked {
  // render options
  @Input() public title: string | null = null;
  @Input() public transformItems?: Function;

  @Input() public imageUrlParam = 'image';
  @Input() public placeholder = 'Type to search';
  @Input() public algoliaLogo = ALGOLIA_LOGO_URL;
  @Input() public validators: Validators[] = [];
  // Text inside of clear button
  @Input() public displaySubmitChipsButton = false;
  @Input() public selectTitle = 'SELECT';
  // Text inside of clear button
  @Input() public displayClearButton = false;
  @Input() public clearTitle = 'CLEAR';
  // Resets state of instantSearch's autocomplete mechanisms on submission of selected item
  @Input() public clearOnSubmit = true;
  // Selecting item emits the submit event with the item's value
  @Input() areChipsRemovable = true;
  @Input() addChipOnBlur = true;
  @Input() chipSelectable = true;
  // connectors options
  @Input() public attributeName: string;
  @Input() public operator: 'or' | 'and' = 'or';
  @Input() public limitMin: number | string = 10;
  @Input() public limitMax: number | string;
  @Input() public sortBy: string[] | ((item: object) => number);

  @ViewChild(MatSelect) groupsSelect: MatSelect;
  // inner state
  searchQuery = '';

  selected = [];

  formContainer: FormGroup;

  public state: RefinementListState = {
    canRefine: false,
    // canToggleShowMore: false,
    createURL: noop,
    // isShowingMore: false,
    items: [],
    refine: noop,
    searchForItems: noop,
    isFormSearch: false
  };

  constructor(
    @Inject(PLATFORM_ID) public platformId: Object,
    fb: FormBuilder,
    searchInstance: TftInstantSearchInstance,
    // private cdr: ChangeDetectorRef,
  ) {
    super(searchInstance, 'RefinementList');
    this.createWidget(connectSearchBox);
    this.formContainer = fb.group({
      'autocomplete': [null, [Validators.required, ...this.validators]]
    });
  }

  get items() {
    return isFunction(this.transformItems)
      ? this.transformItems(this.state.items)
      : this.state.items;
  }

  ngOnInit() {
    this.createWidget(connectRefinementList, {
      limit: parseNumberInput(this.limitMin),
      showMoreLimit: parseNumberInput(this.limitMax),
      attributeName: this.attributeName,
      sortBy: this.sortBy,
      escapeFacetValues: true
    });
    super.ngOnInit();
    
  }

  ngAfterContentChecked() {

    this.selected = this.state.items.length > 0
                  ? this.state.items.filter((item: RefinementListItem) => item.isRefined)
                  : [];

  }

  public refine(
    item: RefinementListItem,
  ) {
 
    // const item = event;
    if (this.state.canRefine) {
      // update UI directly, it will update the checkbox state
      item.isRefined = !item.isRefined;
      // refine through Algolia API
      this.state.refine(item.value);
    }
  }

  handleSubmit(event: MouseEvent) {
    event.preventDefault();
    this.state.searchForItems(this.searchQuery);
  }

  handleChange(value: string) {
    this.searchQuery = value;
    this.state.searchForItems(value);
  }

  handleSelect(event: any) {
    console.log('handleClick event:', event);
    this.refine(event.option.value);
    this.searchQuery = '';
  }
  removeChip(chip) {
    this.refine(chip);
  }
  mapToName(val) {
    return val ? val.name : '';
  }
}
