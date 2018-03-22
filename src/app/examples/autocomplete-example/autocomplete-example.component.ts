import { Component, OnInit } from '@angular/core';
import { InstantSearchConfig } from '../../modules/search/instantsearch/instantsearch-instance';

@Component({
  selector: 'tft-autocomplete-example',
  templateUrl: './autocomplete-example.component.html',
  styleUrls: ['./autocomplete-example.component.css']
})
export class AutocompleteExampleComponent implements OnInit {

 searchConfig: InstantSearchConfig = {
    appId: 'latency',
    apiKey: '3d9875e51fbd20c7754e65422f7ce5e1',
    indexName: 'bestbuy',
    urlSync: false
  };
  // TODO: reconfigure as Observable;
  item: any = null;

  filterCategory = 'brand';
  constructor() { }

  ngOnInit() {
  }

  // Item needs to be <any> here... I'm not being lazy
  handleItemSelected( item: any ) {
    this.item = item;
    console.log('item', item);
  }

  handleItemSubmitted( item: any ) {
    this.item = item;
    console.log('item', item);
  }

  handleChange(hits: any[]) {
    console.log('handling hits', hits);
  }
}
