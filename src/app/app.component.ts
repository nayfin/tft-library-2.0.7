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
    },
    {
      title: 'Autocomplete',
      path: 'autocomplete'
    },
  ];
}
