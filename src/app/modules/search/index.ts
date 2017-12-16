import { ModuleWithProviders, NgModule } from '@angular/core';

// Modules
import { TftResultsModule } from './results/results.module';
import { TftInstantSearchModule } from './instantsearch/instantsearch.module';
import { TftSearchBoxModule } from './search-box/search-box.module';
import { TftHighlightModule } from './highlight/highlight.module';

// import { NgAisInfiniteResultsModule } from './infinite-results/infinite-results.module';
// import { NgAisBreadcrumbModule } from './breadcrumb/breadcrumb.module';
// import { NgAisClearRefinementsModule } from './clear-refinements/clear-refinements.module';
// import { NgAisCurrentRefinementsModule } from './current-refinements/current-refinements.module';
// import { NgAisHierarchicalMenuModule } from './hierarchical-menu/hierarchical-menu.module';
// import { NgAisResultsPerPageModule } from './results-per-page/results-per-page.module';
// import { NgAisMenuModule } from './menu/menu.module';
// import { NgAisNumericMenuModule } from './numeric-menu/numeric-menu.module';
// import { NgAisNumericSelectorModule } from './numeric-selector/numeric-selector.module';
// import { NgAisPaginationModule } from './pagination/pagination.module';
// import { NgAisRangeSliderModule } from './range-slider/range-slider.module';
// import { NgAisRefinementListModule } from './refinement-list/refinement-list.module';
// import { NgAisSortByModule } from './sort-by/sort-by.module';
// import { NgAisRatingMenuModule } from './rating-menu/rating-menu.module';
// import { NgAisStatsModule } from './stats/stats.module';
// import { NgAisToggleModule } from './toggle/toggle.module';
// import { NgAisNumericRangeModule } from './numeric-range/numeric-range.module';


// Custom SSR algoliasearchClient

// import { createSSRAlgoliaClient } from './create-ssr-algolia-client';
// export { createSSRAlgoliaClient };

// import { parseServerRequest } from './parse-server-request';
// export { parseServerRequest };

const TFT_SEARCH_MODULES = [
  TftInstantSearchModule,
  TftResultsModule,
  TftSearchBoxModule,
  TftHighlightModule,
  // NgAisClearRefinementsModule,
  // NgAisMenuModule,
  // NgAisPaginationModule,
  // NgAisRefinementListModule,
  // NgAisResultsPerPageModule,
  // NgAisSortByModule,
  // NgAisNumericSelectorModule,
  // NgAisNumericMenuModule,
  // NgAisStatsModule,
  // NgAisToggleModule,
  // NgAisInfiniteResultsModule,
  // NgAisCurrentRefinementsModule,
  // NgAisHierarchicalMenuModule,
  // NgAisRatingMenuModule,
  // NgAisRangeSliderModule,
  // NgAisBreadcrumbModule,
  // NgAisNumericRangeModule
];

@NgModule({
  exports: TFT_SEARCH_MODULES,
  imports: [TftInstantSearchModule.forRoot()]
})
export class TftSearchRootModule {}

@NgModule({
  imports: TFT_SEARCH_MODULES,
  exports: TFT_SEARCH_MODULES
})
export class TftSearchModule {
  public static forRoot(): ModuleWithProviders {
    return { ngModule: TftSearchRootModule };
  }
}
