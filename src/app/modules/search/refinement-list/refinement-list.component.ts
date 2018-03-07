import { Component, Input, Inject, OnInit, ViewChild, PLATFORM_ID } from '@angular/core';
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
export class TftRefinementListComponent extends BaseWidget implements OnInit {
  // TODO: Title of chip list if needed
  @Input() public title: string | null = null;
  // attribute of search index to search and filter on
  @Input() public attributeName: string;
  // or: results include any of the filter items | and: results include all of the filter items
  @Input() public operator: 'or' | 'and' = 'or';
  // callback function to filter the attribute items as they are returned
  @Input() public transformItems?: Function;
  // name of parameter on item holding image url path
  // e.g. if the item has a path to an image and it is located on item.imageUrl enter 'imageUrl'
  @Input() public imageUrlParam = 'image';
  // placeholder for chiplist
  @Input() public placeholder = 'Type to search';
  // path to algolia logo file, defaults to image served by firebase
  @Input() public algoliaLogo = ALGOLIA_LOGO_URL;
  // any validators to pass into searchbox
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
  // Tab to select chip
  @Input() addChipOnBlur = true;
  // TODO: should we keep this around? What can it be used for?
  @Input() chipSelectable = true;

  // TODO: where is this limiting?
  @Input() public limitMin: number | string = 10;
  @Input() public limitMax: number | string;
  // TODO: what options do we get with sortBy?
  @Input() public sortBy: string[] | ((item: object) => number);

  // @ViewChild(MatSelect) groupsSelect: MatSelect;
  // inner state
  searchQuery = '';
  chips = [];
  // selected = [];
  // remaining = [];
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
  get selectedItems() {
    return this.items.filter( item => item.isRefined );
  }
  get remainingItems() {
    return this.items.filter( item => !this.selectedItems.includes(item) );
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

  public refine(
    item: RefinementListItem,
  ) {
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
    this.refine(event.option.value);
    this.chips.push(event.option.value);
    this.searchQuery = '';
    // this.formContainer.get('autocomplete').reset();
  }

  removeChip(chip) {
    this.refine(chip);
    this.chips.splice(this.chips.indexOf(chip), 1);
  }
  mapToName(val) {
    return val ? val.name : '';
  }
}
