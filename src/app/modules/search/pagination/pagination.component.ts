import { Component, Input, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { connectPagination } from 'instantsearch.js/es/connectors';
import { noop, range } from 'lodash-es';

import { BaseWidget } from '../base-widget';
import { TftInstantSearchInstance } from '../instantsearch/instantsearch-instance';
import { parseNumberInput } from '../utils';
import { OnInit, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { TftResultsPerPageComponent } from '../results-per-page/results-per-page.component';

@Component({
  selector: 'tft-pagination',
  templateUrl: 'pagination.component.html',
  styleUrls: ['pagination.component.scss']
})
export class TftPaginationComponent extends BaseWidget implements OnInit {
  // render options
  @Input() public showFirst = true;
  @Input() public showLast = false;
  @Input() public showPrevious = true;
  @Input() public showNext = true;
  @Input() public pagesPadding: number | string = 3;

  // connector optionsw
  @Input() public maxPages?: number | string;
  @ViewChild(TftResultsPerPageComponent) perPage: TftResultsPerPageComponent;
  
  pageSizes = [10, 25, 50, 100];
  pageSizeOptions = this.pageSizes.map( (val, index) => {
    const isStart = index === 0;
    return  { value: val, label: val.toFixed(0), default: isStart};
  });

  public state = {
    createURL: noop,
    currentRefinement: 0,
    pageSize: 10,
    nbHits: 0,
    nbPages: 0,
    refine: noop
  };
  constructor(
    @Inject(PLATFORM_ID) public platformId: Object,
    searchInstance: TftInstantSearchInstance
  ) {
    super(searchInstance, 'Pagination');
  }

  ngOnInit() {
    this.createWidget(connectPagination, {
      maxPages: parseNumberInput(this.maxPages)
    });
    super.ngOnInit();
  }

  // TODO: request mouse event from MatPaginator
  public refine(/*event: MouseEvent,*/ pageOptions: any) {
    // event.stopPropagation();
    // event.preventDefault();
    const page = pageOptions.pageIndex;
    if (page <= this.state.nbPages && page >= 0) {
      this.perPage.state.refine(pageOptions.pageSize);
      this.state.refine(page);
    }
  }
}

// Leftovers from NgAis, saving in case I need later
  // get pages() {
  //   const { nbPages, currentRefinement } = this.state;
  //   console.log('state:', this.state);
  //   const pagesArray = Array.apply(null, { length: nbPages }).map(
  //     Number.call,
  //     Number
  //   );
  //   const pagesPadding =
  //     typeof this.pagesPadding === 'string'
  //       ? parseInt(this.pagesPadding, 10)
  //       : this.pagesPadding;

  //   if (pagesPadding && pagesPadding > 0) {
  //     // should not display pages that does not exists
  //     if (nbPages < pagesPadding * 2 + 1) {
  //       return pagesArray;
  //     }

  //     const minDelta = currentRefinement - pagesPadding - 1;
  //     const maxDelta = currentRefinement + pagesPadding + 1;

  //     if (minDelta < 0) {
  //       return range(0, currentRefinement + pagesPadding + Math.abs(minDelta));
  //     }

  //     if (maxDelta > nbPages) {
  //       return range(
  //         currentRefinement - pagesPadding - (maxDelta - nbPages),
  //         nbPages
  //       );
  //     }

  //     return range(
  //       currentRefinement - pagesPadding,
  //       currentRefinement + pagesPadding + 1
  //     );
  //   }
  //   return pagesArray;
  // }

