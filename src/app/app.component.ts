import { Component } from '@angular/core';
import { InstantSearchConfig } from './modules/search/instantsearch/instantsearch-instance';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  linksToExamples = [
    {
      title: 'Search Box',
      path: 'search-box'
    }
  ]



  autocompleteConfig: InstantSearchConfig = {
    appId: 'latency',
    apiKey: '3d9875e51fbd20c7754e65422f7ce5e1',
    indexName: 'bestbuy',
    urlSync: false
  };
  // The category of the index by which to filter

}
