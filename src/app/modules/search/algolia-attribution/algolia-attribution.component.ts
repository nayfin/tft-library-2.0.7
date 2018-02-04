import { Component, OnInit, Input } from '@angular/core';
import { ALGOLIA_LOGO_URL } from '../utils';

@Component({
  selector: 'tft-algolia-attribution',
  templateUrl: './algolia-attribution.component.html',
  styleUrls: ['./algolia-attribution.component.scss']
})
export class AlgoliaAttributionComponent implements OnInit {

  @Input() public algoliaLogo = ALGOLIA_LOGO_URL;

  constructor() { }

  ngOnInit() {
  }

}
