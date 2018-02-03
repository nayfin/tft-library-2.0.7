import { Component, OnInit } from '@angular/core';
import { InstantSearchConfig } from '../../search/instantsearch/instantsearch-instance';

@Component({
  selector: 'tft-search-box-example',
  templateUrl: './search-box-example.component.html',
  styleUrls: ['./search-box-example.component.scss']
})
export class SearchBoxExampleComponent implements OnInit {

  // A sample index provided by Algolia for testing 
  searchConfig: InstantSearchConfig = {
    apiKey: '6be0576ff61c053d5f9a3225e2a90f76',
    appId: 'latency',
    indexName: 'instant_search'
  };

  // Must set this up via Algolia console to enable for custom indices
  filterCategory = 'brand';

  // The placeholder for the filter dropdown
  filterPlaceholder = 'Filter by brand';

  constructor() { }

  ngOnInit() {
  }

  // This function gets passed to the items getter in results component via the transformItems input
  // This just logs the items but it could be used to perform transformations as needed by returning a transformed item
  logItem(item: any) {
    console.log('logItem', item);
    return item;
  }

}
