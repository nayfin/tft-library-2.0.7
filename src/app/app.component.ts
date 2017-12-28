import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  // A sample index provided by Algolia for testing 
  searchConfig = {
    apiKey: '6be0576ff61c053d5f9a3225e2a90f76',
    appId: 'latency',
    indexName: 'instant_search'
  };
  // The category of the index by which to filter
  // Must set this up via Algolia console to enable for custom indices
  filterCategory = 'brand';

  // The placeholder for the filter dropdown
  filterPlaceholder = 'Filter by brand';
  
  // This function gets passed to the items getter in results component via the transformItems input
  // This just logs the items but it could be used to perform transformations as needed by returning a transformed item
  logItem(item: any) {
    console.log('logItem', item);
    return item;
  }
}
