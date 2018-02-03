import { Component, OnInit } from '@angular/core';
import { InstantSearchConfig } from '../../search/instantsearch/instantsearch-instance';

@Component({
  selector: 'tft-autocomplete-example',
  templateUrl: './autocomplete-example.component.html',
  styleUrls: ['./autocomplete-example.component.css']
})
export class AutocompleteExampleComponent implements OnInit {

  autocompleteConfig: InstantSearchConfig = {
    appId: 'latency',
    apiKey: '3d9875e51fbd20c7754e65422f7ce5e1',
    indexName: 'bestbuy',
    urlSync: false
  };
  
  constructor() { }

  ngOnInit() {
  }

}
