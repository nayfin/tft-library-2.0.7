import { Component, Input, Inject, PLATFORM_ID } from "@angular/core";
import { connectCurrentRefinedValues } from "instantsearch.js/es/connectors";
import { noop, isFunction } from "lodash-es";

import { BaseWidget } from "../base-widget";
import { TftInstantSearchInstance } from "../instantsearch/instantsearch-instance";

export type CurrentRefinementsState = {
  attributes: {};
  clearAllClick: Function;
  clearAllURL: Function;
  createURL: Function;
  refine: Function;
  refinements: {}[];
};

@Component({
  selector: "ng-ais-current-refinements",
  template: `
    <div [class]="cx()">
      <ng-ais-header [header]="header" [className]="cx('header')"></ng-ais-header>

      <div [class]="cx('body')">
        <button
          [class]="cx('reset')"
          (click)="handleClearAllClick($event)"
          *ngIf="clearRefinements === 'before' || clearRefinements === true">
          {{clearRefinementsLabel}}
        </button>

        <ul [class]="cx('list')">
          <li
            [class]="cx('item')"
            *ngFor="let refinement of refinements"
            (click)="handleClick($event, refinement)"
          >
            <button [class]="cx('button')">
              {{refinement.computedLabel}}
              <span [class]="cx('count')">{{refinement.count}}</span>
            </button>
          </li>
        </ul>

        <button
          [class]="cx('reset')"
          (click)="handleClearAllClick($event)"
          *ngIf="clearRefinements === 'after'">
          {{clearRefinementsLabel}}
        </button>
      </div>

      <ng-ais-footer [footer]="footer" [className]="cx('footer')"></ng-ais-footer>
    </div>
  `
})
export class NgAisCurrentRefinements extends BaseWidget {
  // render options
  @Input() public clearRefinements: "before" | "after" | boolean = "before";
  @Input() public clearRefinementsLabel: string = "Clear refinements";
  @Input() public transformItems?: Function;

  // connector options
  @Input() public onlyListedAttributes: boolean = false;
  @Input() public clearsQuery: boolean = false;
  @Input()
  public attributes: {
    name: string;
    label: string;
  }[] = [];

  public state: CurrentRefinementsState = {
    attributes: {},
    clearAllClick: noop,
    clearAllURL: noop,
    createURL: noop,
    refine: noop,
    refinements: []
  };

  get refinements() {
    return isFunction(this.transformItems)
      ? this.transformItems(this.state.refinements)
      : this.state.refinements;
  }

  constructor(
    @Inject(PLATFORM_ID) public platformId: Object,
    searchInstance: TftInstantSearchInstance
  ) {
    super(searchInstance, "CurrentRefinements");
  }

  public ngOnInit() {
    this.createWidget(connectCurrentRefinedValues, {
      attributes: this.attributes,
      clearsQuery: this.clearsQuery,
      onlyListedAttributes: this.onlyListedAttributes
    });
    super.ngOnInit();
  }

  public handleClick(event: MouseEvent, refinement: {}) {
    event.preventDefault();
    this.state.refine(refinement);
  }

  public handleClearAllClick(event: MouseEvent) {
    event.preventDefault();
    this.state.clearAllClick();
  }
}
