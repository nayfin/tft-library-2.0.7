import { Component, Input, Inject, PLATFORM_ID } from '@angular/core';
import { connectRefinementList } from 'instantsearch.js/es/connectors';
import { noop, isFunction } from 'lodash-es';

import { BaseWidget } from '../base-widget';
import { TftInstantSearchInstance } from '../instantsearch/instantsearch-instance';
import { parseNumberInput } from '../utils';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

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

@Component({
  selector: 'tft-refinement-list',
  templateUrl: 'refinement-list.component.html',
  styleUrls: ['refinement-list.component.scss'],
})
export class TftRefinementListComponent extends BaseWidget implements OnInit {
  // render options
  @Input() public title: string | null = null;
  @Input() public showMoreLabel = 'Show more';
  @Input() public showLessLabel = 'Show less';
  @Input() public transformItems?: Function;
  @Input() public withSearchBox?: boolean;
  @Input() public searchPlaceholder = 'Search here...';

  // connectors options
  @Input() public attributeName: string;
  @Input() public operator: 'or' | 'and' = 'or';
  @Input() public limitMin: number | string = 10;
  @Input() public limitMax: number | string;
  @Input() public sortBy: string[] | ((item: object) => number);

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
    searchInstance: TftInstantSearchInstance
  ) {
    super(searchInstance, 'RefinementList');
  }

  get items() {
    return isFunction(this.transformItems)
      ? this.transformItems(this.state.items)
      : this.state.items;
  }

  public ngOnInit() {
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
    event: MouseEvent,
    item: { isRefined: boolean; value: string }
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
}
