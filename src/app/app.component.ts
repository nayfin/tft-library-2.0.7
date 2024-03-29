import { Component, ViewChild } from '@angular/core';
import { InstantSearchConfig } from './modules/search/instantsearch/instantsearch-instance';
import { MatSidenav } from '@angular/material';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('sidenav') sidenav: MatSidenav;
  title = 'app';

  linksToExamples = [
    {
      title: 'Search Box',
      path: 'search-box',
      description: `Demonstration of search box, results, select to filter, and pagination of search results`,
    },
    {
      title: 'Autocomplete',
      path: 'autocomplete',
      description: `Very basic demonstration of autocomplete component.`
    },
    // {
    //   title: 'Autocomplete Refinement List',
    //   path: 'autocomplete-refinement-list',
    //   description: `Very basic demonstration of autocomplete refinement list component.`
    // },
  ];

  onLinkSelected(item: any) {
    this.sidenav.close();
    // console.log("link item:", item);
  }

}
