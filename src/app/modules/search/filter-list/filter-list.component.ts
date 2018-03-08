import { Component, Input, Inject, OnInit, AfterContentChecked, ViewChild, PLATFORM_ID } from '@angular/core';
import { connectRefinementList } from 'instantsearch.js/es/connectors';
import { noop, isFunction } from 'lodash-es';

import { BaseWidget } from '../base-widget';
import { TftInstantSearchInstance } from '../instantsearch/instantsearch-instance';
import { parseNumberInput } from '../utils';
import { MatSelect } from '@angular/material';

export interface RefinementListState {
  canRefine: boolean;
  canToggleShowMore: boolean;
  createURL: Function;
  isShowingMore: boolean;
  items: {}[];
  refine: Function;
  toggleShowMore: Function;
  searchForItems: Function;
  isFormSearch: boolean;
}

export interface RefinementListItem {
  isRefined: boolean;
  value: string;
}
@Component({
  selector: 'tft-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent extends BaseWidget implements OnInit, AfterContentChecked {

    // render options
    @Input() public title: string | null = null;
    // @Input() public showMoreLabel = 'Show more';
    // @Input() public showLessLabel = 'Show less';
    @Input() public transformItems?: Function;
    // @Input() public withSearchBox = false;
    @Input() public searchPlaceholder = 'Search here...';

    // connectors options
    @Input() public attributeName: string;
    @Input() public operator: 'or' | 'and' = 'or';
    @Input() public limitMin: number | string = 20;
    @Input() public limitMax: number | string;
    @Input() public sortBy: string[] | ((item: object) => number);

    @ViewChild(MatSelect) groupsSelect: MatSelect;
    // inner state
    searchQuery = '';

    public state: RefinementListState = {
      canRefine: false,
      canToggleShowMore: false,
      createURL: noop,
      isShowingMore: false,
      items: [],
      refine: noop,
      toggleShowMore: noop,
      searchForItems: noop,
      isFormSearch: false
    };

    constructor(
      @Inject(PLATFORM_ID) public platformId: Object,
      searchInstance: TftInstantSearchInstance,
      // private cdr: ChangeDetectorRef,
    ) {
      super(searchInstance, 'RefinementList');
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
      // checks state for selected items i.e. isRefined
      // checks the boxes of the selected items in material dropdown by setting its value to an array of the values else an empty array
      this.groupsSelect.value = this.state.items.length > 0
        ? this.state.items.filter((val: RefinementListItem) => val.isRefined ).map((option: RefinementListItem) => option.value )
        : [];
    }

    public refine(
      event: MouseEvent,
      item: RefinementListItem
    ) {
      event.preventDefault();
      event.stopPropagation();
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

    handleKeyup(event: KeyboardEvent) {
      // console.log('handleKeyup', event);
    }
  }

