import { Component, Input, Inject, PLATFORM_ID } from "@angular/core";
import { connectSortBySelector } from "instantsearch.js/es/connectors";
import { noop } from "lodash-es";

import { BaseWidget } from "../base-widget";
import { TftInstantSearchInstance } from "../instantsearch/instantsearch-instance";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
  selector: 'tft-sort-by',
  templateUrl: 'sort-by.component.html'
})
export class TFTSortByComponent extends BaseWidget implements OnInit {
  @Input()
  public indices: {
    name: string;
    label: string;
  }[];

  public state: {
    currentRefinement?: string;
    options: {}[];
    refine: Function;
  } = {
    currentRefinement: null,
    options: [],
    refine: noop
  };

  constructor(
    @Inject(PLATFORM_ID) public platformId: Object,
    searchInstance: TftInstantSearchInstance
  ) {
    super(searchInstance, "SortBy");
  }

  public ngOnInit() {
    this.createWidget(connectSortBySelector, { indices: this.indices });
    super.ngOnInit();
  }
}
