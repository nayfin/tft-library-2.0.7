import { Component, OnInit } from '@angular/core';
import { InstantSearchConfig } from '../../modules/search/instantsearch/instantsearch-instance';

@Component({
  selector: 'tft-autocomplete-refinement-list-example',
  templateUrl: './autocomplete-refinement-list-example.component.html',
  styleUrls: ['./autocomplete-refinement-list-example.component.css']
})
export class AutocompleteRefinementListExampleComponent implements OnInit {

  searchConfig: InstantSearchConfig = {
    appId: 'latency',
    apiKey: '3d9875e51fbd20c7754e65422f7ce5e1',
    indexName: 'bestbuy',
    urlSync: false
  };

  // TODO: reconfigure as Observable;
  item: any = null;

  constructor() { }

  ngOnInit() {
  }

  // Item needs to be <any> here... I'm not being lazy
  onItemSelected( item: any ) {
    this.item = item;
    console.log('item', item);
  }

  handleChange(hits: any[]) {
    console.log('handling hits', hits);
  }
}
