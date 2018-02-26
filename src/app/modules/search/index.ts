import { ModuleWithProviders, NgModule } from '@angular/core';

// Modules
import { TftResultsModule } from './results/results.module';
import { TftInstantSearchModule } from './instantsearch/instantsearch.module';
import { TftSearchBoxModule } from './search-box/search-box.module';
import { TftHighlightModule } from './highlight/highlight.module';
import { TftSortByModule } from './sort-by/sort-by.module';
import { TftRefinementListModule } from './refinement-list/refinement-list.module';
import { TftPaginationModule } from './pagination/pagination.module';
import { TftResultsPerPageModule } from './results-per-page/results-per-page.module';
import { TftAutocompleteModule } from './autocomplete/autocomplete.module';
import { TftAutocompleteRefinementListModule } from './autocomplete-refinement-list/autocomplete-refinement-list.module';

// import { NgAisInfiniteResultsModule } from './infinite-results/infinite-results.module';
// import { NgAisBreadcrumbModule } from './breadcrumb/breadcrumb.module';
// import { NgAisClearRefinementsModule } from './clear-refinements/clear-refinements.module';
// import { NgAisCurrentRefinementsModule } from './current-refinements/current-refinements.module';
// import { NgAisHierarchicalMenuModule } from './hierarchical-menu/hierarchical-menu.module';
// import { NgAisMenuModule } from './menu/menu.module';
// import { NgAisNumericMenuModule } from './numeric-menu/numeric-menu.module';
// import { NgAisNumericSelectorModule } from './numeric-selector/numeric-selector.module';
// import { NgAisRangeSliderModule } from './range-slider/range-slider.module';
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
  TftSearchBoxModule,
  TftResultsModule,
  TftResultsPerPageModule,
  TftPaginationModule,
  TftHighlightModule,
  TftSortByModule,
  TftRefinementListModule,
  TftAutocompleteModule,
  TftAutocompleteRefinementListModule,
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
